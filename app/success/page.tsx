import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Mail, Package, Truck, Clock } from "lucide-react";

export default function SuccessPage() {
  const steps = [
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      text: "Confirmation de commande envoyée par email",
      completed: true
    },
    {
      icon: <Package className="h-5 w-5" />,
      text: "Préparation de votre commande",
      completed: true
    },
    {
      icon: <Truck className="h-5 w-5" />,
      text: "Expédition sous 2-3 jours ouvrés",
      completed: false
    },
    {
      icon: <Clock className="h-5 w-5" />,
      text: "Livraison estimée : 5-7 jours ouvrés",
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-green-100 dark:bg-green-900 p-4">
              <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <CardTitle className="text-3xl mb-2">
            Commande confirmée !
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            Merci pour votre achat ! Votre commande de la Moustiquaire Enroulable
            ECO a été confirmée.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Vous recevrez un email de confirmation avec les détails de votre
                commande et les informations de livraison.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Package className="h-5 w-5" />
              Prochaines étapes :
            </h2>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`rounded-full p-1 ${
                    step.completed
                      ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600"
                  }`}>
                    {step.icon}
                  </div>
                  <span className={`text-sm ${
                    step.completed
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}>
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <Separator />

        <CardFooter className="flex justify-center pt-6">
          <Button asChild size="lg">
            <Link href="/">
              Retour à l'accueil
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
