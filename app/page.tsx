import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { CatalogueCategories } from "@/components/catalogue-categories";
import { ContactForm } from "@/components/contact-form";
import { MapSection } from "@/components/map-section";
import { CTASection } from "@/components/cta-section";
import { HomeWrapper } from "@/components/home-wrapper";

export default function Home() {
  return (
    <HomeWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        {/* Section Hero avec image et texte */}
        <HeroSection />

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
    </HomeWrapper>
  );
}
