import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function CatalogueCategories() {
  const categories = [
    {
      title: "Fenêtres",
      description: "Découvrez notre gamme complète de fenêtres sur mesure, alliant performance énergétique et design moderne.",
      href: "/catalogue/fenetres",
      image: "/catalogue_fenetre.jpg"
    },
    {
      title: "Portes",
      description: "Portes d'entrée et portes-fenêtres élégantes et sécurisées pour votre habitation.",
      href: "/catalogue/portes",
      image: "/catalogue_porte.jpg"
    },
    {
      title: "Vérandas",
      description: "Agrandissez votre espace de vie avec nos vérandas lumineuses et confortables.",
      href: "/catalogue/verandas",
      image: "/catalogue_verandas.jpg"
    },
    {
      title: "Volets",
      description: "Volets roulants et battants pour une isolation et une sécurité optimales.",
      href: "/catalogue/volets",
      image: "/catalogue_volet.jpg"
    },
    {
      title: "Stores",
      description: "Protégez-vous du soleil avec nos stores intérieurs et extérieurs sur mesure.",
      href: "/catalogue/stores",
      image: "/catalogue_store.png"
    },
    {
      title: "Portails",
      description: "Portails coulissants et battants pour sécuriser et embellir votre entrée.",
      href: "/catalogue/portails",
      image: "/catalogue_portail.webp"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}
