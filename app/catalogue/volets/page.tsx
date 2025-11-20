import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProductCTA } from "@/components/product-cta";

export default function VoletsPage() {
  const categories = [
    {
      title: "Volets Battants",
      description: "Volets battants traditionnels et élégants, alliant charme authentique et protection efficace pour vos fenêtres.",
      href: "/catalogue/volets/battants",
      image: "/volets_battant.jpeg"
    },
    {
      title: "Volets Roulants",
      description: "Volets roulants modernes et pratiques, offrant confort d'utilisation, isolation thermique et sécurité renforcée.",
      href: "/catalogue/volets/roulants",
      image: "/volets_roulant.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/catalogue_volet.jpg"
          alt="Nos volets"
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
            Volets
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos volets battants et roulants sur mesure. Des solutions adaptées à vos besoins en matière d'isolation, de sécurité et d'esthétique.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Catégories */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
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
          title="Besoin de conseils pour vos volets ?"
          description="Nos experts sont à votre disposition pour vous aider à choisir les volets adaptés à votre projet et vous fournir un devis personnalisé."
        />
      </div>
    </div>
  );
}
