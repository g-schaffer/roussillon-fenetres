"use client";

import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    { src: "/fenetre_aluminium1.jpg", label: "Fenêtres aluminium" },
    { src: "/verandas1.webp", label: "Vérandas" },
    { src: "/volet_roulant.jpg", label: "Volets roulants" },
    { src: "/porte1.png", label: "Portes" },
  ];

  const avantages = [
    "Des devis gratuits pour toute prestation de menuiserie",
    "Une étude et des conseils personnalisés de votre projet de menuiserie",
    "Des tarifs compétitifs",
    "Garanti 15 ans"
  ];

  const scrollNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const scrollPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Fonction pour obtenir les 4 images à afficher
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % carouselImages.length;
      images.push({ ...carouselImages[index], key: `${currentIndex}-${i}` });
    }
    return images;
  };

  return (
    <div className="relative w-full h-screen">
      {/* Boutons en haut à gauche */}
      <div className="absolute top-4 left-4 lg:top-6 lg:left-6 right-4 lg:right-6 z-10">
        <div className="p-3 inline-block">
          <div className="flex gap-6 lg:gap-8 items-center mb-6">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white rounded-3xl">
              <Link href="/">Accueil</Link>
            </Button>
            <Link href="/catalogue" className="text-foreground hover:text-primary font-medium text-sm lg:text-base">
              Notre catalogue
            </Link>
            <Link href="/realisations" className="text-foreground hover:text-primary font-medium text-sm lg:text-base">
              Nos réalisations
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary font-medium text-sm lg:text-base">
              Contact
            </Link>
          </div>
        </div>

        {/* Carrousel d'images */}
        <div className="relative bg-white dark:bg-gray-900 p-3 rounded-3xl max-w-5xl">
          <div className="grid grid-cols-4 gap-3 lg:gap-4">
            {getVisibleImages().map((image) => (
              <div
                key={image.key}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt="Carousel image"
                  fill
                  className="object-cover"
                />
                {/* Bouton semi-transparent en bas au centre */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 text-white text-center font-medium text-sm rounded-full whitespace-nowrap">
                  {image.label}
                </div>
              </div>
            ))}
          </div>

          {/* Flèches de navigation */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-3 shadow-lg z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-3 shadow-lg z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
      </div>

      {/* Carré bleu superposé à l'image, aligné sous le carousel */}
      <div className="absolute top-[374px] lg:top-[374px] left-[40%] ml-4 lg:ml-6 z-20">
        {/* Conteneur du carré */}
        <div className="relative dark:bg-gray-900 p-8 rounded-3xl max-w-md">
          {/* Coin inversé blanc en haut à gauche */}
          <div
            className="absolute top-0 left-0 w-6 h-6"
            style={{
              background: 'radial-gradient(circle at bottom right, transparent 1.5rem, white 1.5rem)',
            }}
          ></div>
          {/* Contenu du carré */}
        </div>
      </div>

      {/* Carré bleu superposé à l'image, aligné sur le carousel */}
      <div className="absolute top-[88px] lg:top-[88px] left-[40%] ml-4 lg:ml-6 z-20">
        {/* Conteneur du carré */}
        <div className="relative dark:bg-gray-900 p-8 rounded-3xl max-w-md">
          {/* Coin inversé blanc en haut à gauche */}
          <div
            className="absolute top-0 left-0 w-6 h-6"
            style={{
              background: 'radial-gradient(circle at top right, transparent 1.5rem, white 1.5rem)',
            }}
          ></div>
          {/* Contenu du carré */}
        </div>
      </div>

      {/* Bouton Devis en superposition */}
      <div className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10">
        <div className="flex items-stretch">
          {/* Rectangle transparent avec coin inversé */}
          <div className="relative w-[50px]">
            <div
              className="absolute top-0 right-0 w-6 h-6"
              style={{
                background: 'radial-gradient(circle at bottom left, transparent 1.5rem, white 1.5rem)',
              }}
            ></div>
          </div>

          {/* Conteneur du bouton */}
          <div
            className="bg-white dark:bg-gray-900 p-3 shadow-lg"
            style={{
              borderRadius: '0 0 0 1.5rem'
            }}
          >
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white rounded-3xl">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>

        {/* Carré transparent en bas avec coin inversé en haut à droite */}
        <div className="relative w-full h-[50px]">
          <div
            className="absolute top-0 right-0 w-6 h-6"
            style={{
              background: 'radial-gradient(circle at bottom left, transparent 1.5rem, white 1.5rem)',
            }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] h-full">
        {/* Texte */}
        <div className="bg-white dark:bg-gray-900 p-8 lg:p-12">
          <div className="max-w-2xl" style={{ marginTop: '350px' }}>
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

        {/* Image */}
        <div className="relative h-[400px] lg:h-auto p-4 lg:p-6 bg-white dark:bg-gray-900">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src="/catalogue.jpeg"
              alt="Roussillon Fenêtres"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
