import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Info, Mail } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-orange-100 dark:bg-orange-900 p-4">
              <AlertTriangle className="h-16 w-16 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <CardTitle className="text-3xl mb-2">
            Paiement annulé
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            Votre commande n'a pas été finalisée. Aucun montant n'a été débité.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Si vous avez rencontré un problème lors du paiement, n'hésitez pas
                à réessayer ou à nous contacter pour obtenir de l'aide.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button asChild size="lg" className="w-full">
              <Link href="/checkout">
                Réessayer le paiement
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/">
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </CardContent>

        <Separator />

        <CardFooter className="flex justify-center pt-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              <Mail className="h-4 w-4" />
              Besoin d'aide ? Contactez-nous à : support@roussillon-fenetres.fr
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
