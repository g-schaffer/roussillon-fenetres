import Image from "next/image";
import { Check } from "lucide-react";
import { StatsSection } from "@/components/stats-section";
import { CatalogueCategories } from "@/components/catalogue-categories";
import { ContactForm } from "@/components/contact-form";
import { MapSection } from "@/components/map-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  const avantages = [
    "Des devis gratuits pour toute prestation de menuiserie",
    "Une étude et des conseils personnalisés de votre projet de menuiserie",
    "Des tarifs compétitifs",
    "Garanti 15 ans"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Section Hero avec image et texte */}
      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Image */}
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/catalogue.jpeg"
              alt="Roussillon Fenêtres"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Texte */}
          <div className="flex items-center bg-white dark:bg-gray-900 p-8 lg:p-12">
            <div className="max-w-2xl">
              <div className="relative w-full h-20 md:h-24 lg:h-28 mb-6">
                <Image
                  src="/name.png"
                  alt="Roussillon Fenêtres"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <p>
                  Fort d'une expérience de plus de 30 ans, Roussillon Fenêtres Perpignan Cabestany vous propose ses services pour la fabrication, réparation, rénovation ou entretien de tout élément en bois, PVC aluminium et sur mesure.
                </p>
                <p className="font-semibold text-foreground">
                  Distributeur exclusif Oknoplast, Roussillon Fenêtres Perpignan Cabestany a toutes les cordes à son arc.
                </p>
              </div>

              {/* Liste des avantages */}
              <div className="space-y-3">
                {avantages.map((avantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 dark:bg-green-900 p-1 text-green-600 dark:text-green-400 mt-1 flex-shrink-0">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="text-base text-foreground">
                      {avantage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Stats */}
      <StatsSection />

      {/* Section Catalogue */}
      <CatalogueCategories />

      {/* Section Formulaire de contact */}
      <ContactForm />

      {/* Section Carte et localisation */}
      <MapSection />

      {/* Section CTA */}
      <CTASection />

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        <p>© 2024 Roussillon Fenêtres - Tous droits réservés</p>
      </footer>
    </div>
  );
}
