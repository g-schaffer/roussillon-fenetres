import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Thermometer, Shield, Volume2, Maximize2, Lock, Zap } from "lucide-react";
import { ProductCTA } from "@/components/product-cta";

export default function FenetresAluminiumPage() {
  const caracteristiquesFenetre = [
    {
      icon: <Thermometer className="h-5 w-5" />,
      title: "Isolation thermique",
      value: "isolation",
      description: "La technologie innovante de la structure composite multi-chambres permet d'assurer la rupture thermique intérieur / extérieur. L'étanchéité périphérique du vitrage optimise la performance thermique et neutralise le passage d'air."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Solidité structurelle",
      value: "solidite",
      description: "Le vitrage structurel solidaire du noyau composite, grâce à un joint adhésif périphérique, assure la stabilité de l'ouvrant et pérennise le fonctionnement des organes de fermeture dans le temps. Soudée dans les angles, cette structure renforce la rigidité de l'ouvrant."
    },
    {
      icon: <Volume2 className="h-5 w-5" />,
      title: "Isolation acoustique",
      value: "acoustique",
      description: "Le joint de parclose tubulaire, couplé au joint de vitrage continu, contribue à la performance acoustique de la fenêtre."
    }
  ];

  const caracteristiquesCoulissant = [
    {
      icon: <Maximize2 className="h-5 w-5" />,
      title: "Finesse",
      value: "finesse",
      description: "Largeur visible de l'ouvrant de 50 mm. Profil central de 37 mm"
    },
    {
      icon: <Thermometer className="h-5 w-5" />,
      title: "Isolation",
      value: "isolation-coulissant",
      description: "Rupture de pont thermique par barrettes polyamide sur ouvrant et sur dormant. Bouclier thermique en traverse basse. Vitrage 4 / 16 Argon / 4 FE Intercalaire de vitrage alu noir"
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Résistance",
      value: "resistance",
      description: "Dormant de 85 mm. Drainage masqué"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Innovation",
      value: "innovation",
      description: "Rail de guidage en matériau de synthèse"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/fenetre_aluminium.jpg"
          alt="Fenêtres Aluminium"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Aluminium
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fenêtres Aluminium
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Roussillon Fenêtres s'est bien positionnée sur le marché en mettant en avant son produit aluminium au même titre que le PVC
          </p>
        </div>

        {/* Section La fenêtre aluminium - Texte à gauche, Image à droite */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Texte avec Accordion */}
            <div>
              <h2 className="text-3xl font-bold mb-4">La fenêtre aluminium</h2>
              <p className="text-muted-foreground mb-6">
                Ses principales caractéristiques sont :
              </p>
              <Accordion type="single" collapsible className="w-full">
                {caracteristiquesFenetre.map((carac) => (
                  <AccordionItem key={carac.value} value={carac.value}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2 text-primary">
                          {carac.icon}
                        </div>
                        <span className="font-semibold">{carac.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground ml-11 pt-2">
                        {carac.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/fenetre_aluminium1.jpg"
                alt="La fenêtre aluminium"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section Le coulissant aluminium - Image à gauche, Texte à droite */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/fenetre_aluminium2.jpg"
                alt="Le coulissant aluminium"
                fill
                className="object-cover"
              />
            </div>

            {/* Texte avec Accordion */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Le coulissant aluminium</h2>
              <p className="text-muted-foreground mb-6">
                Toujours fidèle à elle-même, Roussillon Fenêtres reste dans sa démarche de qualité en vous proposant une gamme de coulissants toutes options
              </p>
              <Accordion type="single" collapsible className="w-full">
                {caracteristiquesCoulissant.map((carac) => (
                  <AccordionItem key={carac.value} value={carac.value}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2 text-primary">
                          {carac.icon}
                        </div>
                        <span className="font-semibold">{carac.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground ml-11 pt-2">
                        {carac.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <ProductCTA
          title="Intéressé par nos fenêtres aluminium ?"
          description="Contactez-nous pour obtenir un devis personnalisé et découvrir toutes les options disponibles pour votre projet."
        />
      </div>
    </div>
  );
}
