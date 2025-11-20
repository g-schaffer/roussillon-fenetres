import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CatalogueCategories } from "@/components/catalogue-categories";

import { ProductCTA } from "@/components/product-cta";
export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/catalogue.jpeg"
          alt="Notre catalogue"
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
            Notre Catalogue
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre large gamme de produits pour embellir et sécuriser votre habitat. Des solutions sur mesure adaptées à tous vos projets.
          </p>
        </div>
      </div>

      {/* Catégories */}
      <CatalogueCategories />

      <div className="container mx-auto px-4 pb-16">
        {/* Call to action */}
        <ProductCTA
          title="Besoin de conseils ?"
          description="Nos experts sont à votre disposition pour vous aider à choisir les produits adaptés à votre projet."
        />
      </div>
    </div>
  );
}
