import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProductCTA } from "@/components/product-cta";

export default function StoresPage() {
  const categories = [
    {
      title: "Stores Extérieurs",
      description: "Stores bannes, pergolas et brise-soleil pour protéger vos espaces extérieurs du soleil tout en créant une ambiance conviviale.",
      href: "/catalogue/stores/exterieurs",
      image: "/stores_exterieur.jpg"
    },
    {
      title: "Stores Intérieurs",
      description: "Stores vénitiens, enrouleurs et plissés pour contrôler la lumière et préserver votre intimité avec élégance.",
      href: "/catalogue/stores/interieurs",
      image: "/stores_interieur.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/catalogue.jpeg"
          alt="Nos stores"
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
            Stores
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos stores extérieurs et intérieurs sur mesure. Des solutions adaptées pour gérer la luminosité, vous protéger du soleil et embellir votre intérieur.
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
          title="Besoin de conseils pour vos stores ?"
          description="Nos experts sont à votre disposition pour vous aider à choisir les stores adaptés à votre projet et vous fournir un devis personnalisé."
        />
      </div>
    </div>
  );
}
