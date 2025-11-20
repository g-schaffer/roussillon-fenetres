"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

function CheckoutContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Récupérer les paramètres d'URL
    const largeur = searchParams.get("largeur");
    const hauteur = searchParams.get("hauteur");
    const prix = searchParams.get("prix");

    // Créer une session de paiement
    fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        largeur,
        hauteur,
        prix,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sessionId) {
          // Redirection vers Stripe Checkout
          if (data.url) {
            window.location.href = data.url;
          }
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            Finalisation de votre commande
          </CardTitle>
          <CardDescription className="text-center">
            Veuillez patienter quelques instants...
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground text-center">
            Redirection vers le paiement sécurisé...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Finalisation de votre commande
              </CardTitle>
              <CardDescription className="text-center">
                Veuillez patienter quelques instants...
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground text-center">
                Chargement...
              </p>
            </CardContent>
          </Card>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
