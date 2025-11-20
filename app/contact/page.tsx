import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { MapSection } from "@/components/map-section";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner dans tous vos projets de menuiserie.
          </p>
        </div>
      </div>

      {/* Formulaire de contact */}
      <ContactForm />

      {/* Section Carte et localisation */}
      <MapSection />
    </div>
  );
}
