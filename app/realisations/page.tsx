import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsSection } from "@/components/stats-section";

export default function RealisationsPage() {
  const realisations = [
    {
      id: 1,
      image: "/realisation1.png",
      title: "Installation Moustiquaire Villa Moderne",
      description: "Installation complète de moustiquaires enroulables sur mesure pour une villa contemporaine",
      client: "Particulier - Roussillon",
      date: "Novembre 2024"
    },
    {
      id: 2,
      image: "/realisation2.png",
      title: "Rénovation Fenêtres Maison Provençale",
      description: "Remplacement et installation de moustiquaires pour une maison de charme",
      client: "Particulier - Vaucluse",
      date: "Octobre 2024"
    },
    {
      id: 3,
      image: "/realisation3.png",
      title: "Projet Résidentiel Grande Envergure",
      description: "Équipement complet d'une résidence avec nos solutions de protection contre les insectes",
      client: "Résidence privée",
      date: "Septembre 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Notre expertise
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents. Chaque installation est réalisée avec soin et professionnalisme pour garantir votre satisfaction.
          </p>
        </div>
      </div>

      {/* Stats */}
      <StatsSection />

      <div className="container mx-auto px-4 pb-16">
        {/* Galerie de réalisations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {realisations.map((realisation) => (
            <Card key={realisation.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={realisation.image}
                  alt={realisation.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{realisation.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {realisation.description}
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{realisation.client}</Badge>
                  </div>
                  <div className="text-muted-foreground">
                    {realisation.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Un projet en tête ?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé gratuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33468732356"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Nous appeler
                </a>
                <a
                  href="mailto:contact@roussillon-fenetres.fr"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Nous écrire
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
