import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-11-17.clover",
});

const resend = new Resend(process.env.RESEND_API_KEY);

// Cette route doit recevoir le body brut (raw) pour vérifier la signature
export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    // Vérifier la signature du webhook
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Gérer l'événement
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        console.log("Payment successful:", session.id);

        // Récupérer les détails du paiement
        const customerEmail = session.customer_details?.email;
        const customerName = session.customer_details?.name;
        const amountTotal = session.amount_total ? session.amount_total / 100 : 0;
        const largeur = session.metadata?.largeur;
        const hauteur = session.metadata?.hauteur;

        // Récupérer les adresses
        const billingAddress = session.customer_details?.address;
        // Stripe.Checkout.Session n'a pas shipping_details par défaut
        // Utilisons la même adresse de facturation comme fallback
        const shippingAddress =
          (session.customer_details as any)?.shipping_address ||
          billingAddress;

        if (customerEmail) {
          // Envoyer l'email de confirmation
          await sendConfirmationEmail({
            email: customerEmail,
            name: customerName || "Client",
            orderId: session.id,
            amount: amountTotal,
            largeur: largeur || "",
            hauteur: hauteur || "",
            billingAddress,
            shippingAddress: shippingAddress || billingAddress,
          });
        }

        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("PaymentIntent was successful:", paymentIntent.id);
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("PaymentIntent failed:", paymentIntent.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

async function sendConfirmationEmail({
  email,
  name,
  orderId,
  amount,
  largeur,
  hauteur,
  billingAddress,
  shippingAddress,
}: {
  email: string;
  name: string;
  orderId: string;
  amount: number;
  largeur: string;
  hauteur: string;
  billingAddress: any;
  shippingAddress: any;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Roussillon Fenêtres <noreply@roussillon-fenetres.fr>",
      to: [email],
      subject: `Confirmation de commande - ${orderId}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #2563eb;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9fafb;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .order-details {
                background-color: white;
                padding: 20px;
                margin: 20px 0;
                border-radius: 8px;
                border-left: 4px solid #2563eb;
              }
              .detail-row {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                border-bottom: 1px solid #e5e7eb;
              }
              .detail-row:last-child {
                border-bottom: none;
                font-weight: bold;
                font-size: 1.1em;
                color: #2563eb;
              }
              .address-section {
                background-color: white;
                padding: 15px;
                margin: 10px 0;
                border-radius: 8px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 0.9em;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>✅ Commande confirmée !</h1>
            </div>
            <div class="content">
              <p>Bonjour ${name},</p>
              <p>Merci pour votre commande ! Nous avons bien reçu votre paiement.</p>

              <div class="order-details">
                <h3 style="margin-top: 0; color: #2563eb;">📦 Détails de la commande</h3>
                <div class="detail-row">
                  <span>Numéro de commande:</span>
                  <span><strong>${orderId}</strong></span>
                </div>
                <div class="detail-row">
                  <span>Produit:</span>
                  <span>Moustiquaire enroulable sur-mesure</span>
                </div>
                <div class="detail-row">
                  <span>Dimensions:</span>
                  <span>${hauteur} x ${largeur} mm</span>
                </div>
                <div class="detail-row">
                  <span>Montant total TTC:</span>
                  <span>${amount.toFixed(2)} €</span>
                </div>
              </div>

              ${shippingAddress ? `
              <div class="address-section">
                <h4 style="margin-top: 0; color: #2563eb;">📍 Adresse de livraison</h4>
                <p style="margin: 5px 0;">
                  ${shippingAddress.line1 || ''}<br>
                  ${shippingAddress.line2 ? shippingAddress.line2 + '<br>' : ''}
                  ${shippingAddress.postal_code || ''} ${shippingAddress.city || ''}<br>
                  ${shippingAddress.country || ''}
                </p>
              </div>
              ` : ''}

              <p style="margin-top: 30px;">
                <strong>Prochaines étapes :</strong>
              </p>
              <ul>
                <li>Votre commande sera traitée sous 1-2 jours ouvrés</li>
                <li>Vous recevrez un email de suivi d'expédition</li>
                <li>Délai de livraison : 14-21 jours ouvrés</li>
              </ul>

              <p>
                Si vous avez des questions, n'hésitez pas à nous contacter à
                <a href="mailto:${process.env.CONTACT_EMAIL}">${process.env.CONTACT_EMAIL}</a>
              </p>

              <div class="footer">
                <p>Merci de votre confiance !</p>
                <p><strong>Roussillon Fenêtres</strong></p>
                <p style="font-size: 0.8em; color: #9ca3af;">
                  Cet email a été envoyé automatiquement, merci de ne pas y répondre.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return;
    }

    console.log("Confirmation email sent:", data?.id);
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
  }
}
