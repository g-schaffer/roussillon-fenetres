import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Phone } from "lucide-react";

export function CTASection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et personnalisé. Notre équipe d'experts est à votre écoute pour concrétiser vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Obtenir un devis
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
                <a href="tel:+33468732356" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  04 68 73 23 56
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
