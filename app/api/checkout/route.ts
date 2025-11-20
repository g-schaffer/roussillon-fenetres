import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { findPriceId } from "@/lib/stripe-prices";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
});

export async function POST(request: NextRequest) {
  try {
    const { largeur, hauteur } = await request.json();

    // Vérifier que les dimensions sont fournies
    if (!hauteur || !largeur) {
      return NextResponse.json(
        { error: "Les dimensions (hauteur et largeur) sont requises" },
        { status: 400 }
      );
    }

    // Vérifier si les dimensions correspondent à un produit Stripe existant
    const priceId = findPriceId(hauteur, largeur);

    if (!priceId) {
      return NextResponse.json(
        { error: `Les dimensions ${hauteur}x${largeur}mm ne sont pas disponibles` },
        { status: 400 }
      );
    }

    // Créer une session de paiement avec le prix existant
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // Activer la collecte automatique de la TVA
      // DÉSACTIVÉ : nécessite configuration dans Stripe Dashboard
      // automatic_tax: {
      //   enabled: true,
      // },
      // Demander l'adresse de facturation
      billing_address_collection: "required",
      // Demander l'adresse de livraison
      shipping_address_collection: {
        allowed_countries: ["FR", "BE", "LU", "CH", "IT", "ES", "DE"], // Pays de livraison autorisés
      },
      // Options de livraison (optionnel)
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0, // Livraison gratuite
              currency: "eur",
            },
            display_name: "Livraison gratuite",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 14,
              },
              maximum: {
                unit: "business_day",
                value: 21,
              },
            },
          },
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
      metadata: {
        largeur: largeur,
        hauteur: hauteur,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Erreur lors de la création de la session Stripe:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la session de paiement" },
      { status: 500 }
    );
  }
}
