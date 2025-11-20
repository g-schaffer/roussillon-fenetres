import Image from "next/image";
import { ProductCTA } from "@/components/product-cta";
import { Badge } from "@/components/ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Thermometer, Heart, Volume2, Palette, Award } from "lucide-react";

export default function FenetresPVCPage() {
  const caracteristiquesModernite = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Confort",
      value: "confort",
      description: "Aération partielle de l'ouvrant : Cette micro-aération permet de ventiler la pièce sans diminuer le niveau de sécurité de la fenêtre.\n\nLe Joint de propreté partiel situé sur la partie basse de la fenêtre empêche les poussières et les grains de sable de s'incruster dans la partie basse de la fenêtre. Même ouverte la fenêtre reste propre et facile à nettoyer.\n\nPoignée centrée 112 mm : Ce système de jonction entre deux vantaux par chevauchement permet d'augmenter le clair de vitrage en diminuant l'épaisseur du battement central de plus de 30%.\n\nLe vitrage 6/16/4 phonique : apporte un vrai Confort et une isolation optimale. Il permet une réduction acoustique importante de 34 à 49 dB."
    },
    {
      icon: <Thermometer className="h-5 w-5" />,
      title: "Isolation",
      value: "isolation",
      description: "Nos fenêtres sont composées de 6 chambres d'isolation intégrées dans l'ouvrant, ce qui augmente l'isolation thermique de la fenêtre. Profilé de type Classe A.\n\nWarm Edge : Cette option permet d'améliorer les propriétés Thermiques, de réduire la condensation et le coefficient Uw des parois vitrées"
    }
  ];

  const caracteristiquesDesign = [
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Design",
      value: "design",
      description: "Une multitude de combinaisons de couleurs sont possibles afin que les fenêtres s'intègrent au plus juste à l'esthétique de la maison.\n\nPaumelles Invisso : Les paumelles sont entièrement invisibles lorsque la fenêtre est fermée, donnant un aspect moderne à l'ensemble de la fenêtre.\n\nColorfull : Ce processus de plaxage exclusif permet un rendu parfait de la fenêtre ouverte comme fermée."
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Garantie 15 ans",
      value: "garantie",
      description: "Qualité de soudure et d'assemblage uniquement sur 90°, teste selon la norme 514 – EN – 2002 ; Déformation des profilés 1mm / m selon la norme EN – 12 608 : 2004 ; Vieillissement du revêtement de surface selon la norme EN 513 : 2002 et l'apparence selon la norme DIN – ISO 105 A 03."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/fenetre_pvc.avif"
          alt="Fenêtres PVC"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            PVC
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fenêtres PVC
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl text-muted-foreground">
              Exclusivité produit, seul à distribuer dans la région
            </p>
            <p className="text-lg text-muted-foreground">
              De la gamme classique à la gamme toutes options, Roussillon Fenêtres s'adapte à vos besoins.
            </p>
            <p className="text-base text-muted-foreground">
              Notre point fort concerne la gamme toutes options défiant toute concurrence et permettant d'allier à la fois :
            </p>
          </div>
        </div>

        {/* Section Modernité et luminosité - Texte à gauche, Image à droite */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Texte avec Accordion */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Modernité et luminosité</h2>
              <Accordion type="single" collapsible className="w-full">
                {caracteristiquesModernite.map((carac) => (
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
                      <div className="text-muted-foreground ml-11 pt-2 whitespace-pre-line">
                        {carac.description}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/fenetre_pvc.avif"
                alt="Modernité et luminosité"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section Design et Garantie - Image à gauche, Texte à droite */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/fenetre_pvc.avif"
                alt="Design et Garantie"
                fill
                className="object-cover"
              />
            </div>

            {/* Texte avec Accordion */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Design et Garantie</h2>
              <Accordion type="single" collapsible className="w-full">
                {caracteristiquesDesign.map((carac) => (
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
                      <div className="text-muted-foreground ml-11 pt-2 whitespace-pre-line">
                        {carac.description}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <ProductCTA
          title="Intéressé par nos fenêtres PVC ?"
          description="Contactez-nous pour obtenir un devis personnalisé et découvrir toutes les options disponibles pour votre projet."
        />
      </div>
    </div>
  );
}
