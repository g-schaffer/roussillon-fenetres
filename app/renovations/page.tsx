import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Home, Paintbrush, Building2, Landmark, CheckCircle2, Users, Award, HeartHandshake } from "lucide-react";

import { ProductCTA } from "@/components/product-cta";
export default function RenovationsPage() {
  const services = [
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: "Rénovation Intérieure",
      description: "Aménagement des espaces, peinture, revêtements de sol, et plus encore."
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Rénovation Extérieure",
      description: "Façades, terrasses, et amélioration de l'efficacité énergétique de votre maison."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Extensions et Agrandissements",
      description: "Ajoutez de la valeur à votre propriété avec des extensions bien conçues."
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Restauration de Patrimoine",
      description: "Préservez le charme de votre maison tout en lui offrant un nouveau souffle."
    }
  ];

  const advantages = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "Expertise",
      description: "Une équipe de professionnels expérimentés à votre service."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Personnalisation",
      description: "Des solutions sur mesure pour répondre à vos besoins spécifiques."
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: "Qualité",
      description: "Des matériaux de premier choix et un travail soigné pour des résultats durables."
    },
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      title: "Accompagnement",
      description: "Un suivi personnalisé à chaque étape de votre projet."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Nos services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Rénovation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformez votre espace de vie avec notre service de rénovation de maison. Que vous souhaitiez moderniser votre cuisine, rénover votre salle de bain ou repenser l'agencement de votre intérieur, nous sommes là pour réaliser vos projets.
          </p>
        </div>

        {/* Image principale */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/renovation1.png"
                alt="Projet de rénovation"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>

        {/* Services */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Services Comprennent :
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="max-w-6xl mx-auto mb-16" />

        {/* Pourquoi nous choisir */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi Choisir Nos Services ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/10 p-3 text-primary mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <ProductCTA
          title="Prêt à rénover votre habitat ?"
          description="Contactez-nous pour discuter de votre projet de rénovation et obtenir un devis personnalisé gratuit."
        />
      </div>
    </div>
  );
}
