import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProductCTA } from "@/components/product-cta";

export default function FenetresPage() {
  const categories = [
    {
      title: "Fenêtres Aluminium",
      description: "Fenêtres en aluminium design et performantes, idéales pour une esthétique moderne et une excellente isolation thermique.",
      href: "/catalogue/fenetres/aluminium",
      image: "/fenetre_aluminium.jpg"
    },
    {
      title: "Fenêtres PVC",
      description: "Fenêtres en PVC économiques et durables, offrant d'excellentes performances d'isolation et un entretien minimal.",
      href: "/catalogue/fenetres/pvc",
      image: "/fenetre_pvc.avif"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/catalogue_fenetre.jpg"
          alt="Nos fenêtres"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Notre gamme
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fenêtres
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos fenêtres sur mesure en aluminium et PVC. Des solutions performantes alliant design, isolation et durabilité pour votre habitat.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Catégories */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Link key={category.title} href={category.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {category.description}
                    </CardDescription>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Découvrir
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <ProductCTA
          title="Besoin de conseils pour vos fenêtres ?"
          description="Nos experts sont à votre disposition pour vous aider à choisir les fenêtres adaptées à votre projet et vous fournir un devis personnalisé."
        />
      </div>
    </div>
  );
}
