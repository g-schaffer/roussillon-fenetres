"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Check, Home, ChevronRight, Truck, Shield, CreditCard, Ruler, AlertCircle, ChevronLeft } from "lucide-react";
import { findPrice, findPriceHT, getDimensionRanges } from "@/lib/stripe-prices";

export default function MoustiquairePage() {
  const [largeur, setLargeur] = useState(0);
  const [hauteur, setHauteur] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const largeurInputId = useId();
  const hauteurInputId = useId();

  const images = [
    { src: "/moustiquaire_1.png", alt: "Moustiquaire fenêtre enroulable" },
    { src: "/moustiquaire1.png.jpeg", alt: "Moustiquaire fenêtre enroulable - vue 2" },
    { src: "/moustiquaire2.png.jpeg", alt: "Moustiquaire fenêtre enroulable - vue 3" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const dimensionRanges = getDimensionRanges();

  const calculatePrice = () => {
    if (largeur === 0 || hauteur === 0) return 0;
    return findPrice(hauteur, largeur) || 0;
  };

  const calculatePriceHT = () => {
    if (largeur === 0 || hauteur === 0) return 0;
    return findPriceHT(hauteur, largeur) || 0;
  };

  const price = calculatePrice();
  const priceHT = calculatePriceHT();
  const priceTVA = price - priceHT;
  const isDimensionValid = largeur > 0 && hauteur > 0 && price > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8 text-muted-foreground">
          <a href="/" className="hover:text-primary">
            <Home className="h-4 w-4" />
          </a>
          <ChevronRight className="h-4 w-4" />
          <span>Toutes les collections</span>
          <ChevronRight className="h-4 w-4" />
          <span>Moustiquaires Fenêtres</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Moustiquaire fenêtre enroulable sur-mesure</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Galerie d'images */}
          <div className="space-y-4">
            <div className="relative">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] md:aspect-square rounded-lg overflow-hidden bg-white">
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Boutons de navigation */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-3 shadow-lg z-10"
                aria-label="Image précédente"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-3 shadow-lg z-10"
                aria-label="Image suivante"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Indicateurs */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    type="button"
                    key={images[index].src}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-primary w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Configuration */}
          <div className="space-y-4 lg:space-y-6">
            <Badge variant="secondary" className="mb-4">
              Moustiquaires Fenêtres
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Moustiquaire fenêtre enroulable sur-mesure Verticale Anti-Insectes
            </h1>

            <Card className="mb-6">
              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    Configurez votre moustiquaire sur-mesure
                  </h2>
                  <p className="text-muted-foreground">
                    Indiquez les dimensions de votre fenêtre pour obtenir un devis instantané
                  </p>
                </div>

                {/* Dimensions */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                    <Label className="text-base font-semibold">
                      Dimensions <span className="text-red-500">*</span>
                    </Label>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto justify-center"
                      onClick={() => window.open('/prise_de_mesure.pdf', '_blank')}
                    >
                      📏 Comment prendre les mesures
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={largeurInputId} className="text-sm sm:text-base">Largeur (mm)</Label>
                      <Input
                        id={largeurInputId}
                        type="number"
                        min={dimensionRanges.largeur.min}
                        max={dimensionRanges.largeur.max}
                        step="100"
                        value={largeur || ""}
                        onChange={(e) => setLargeur(Number(e.target.value))}
                        placeholder="0"
                        className="text-base sm:text-lg"
                      />
                      <p className="text-xs text-muted-foreground">
                        Valeurs disponibles : {dimensionRanges.largeur.min} mm - {dimensionRanges.largeur.max} mm (paliers de 100mm)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={hauteurInputId} className="text-sm sm:text-base">Hauteur (mm)</Label>
                      <Input
                        id={hauteurInputId}
                        type="number"
                        min={dimensionRanges.hauteur.min}
                        max={dimensionRanges.hauteur.max}
                        step="100"
                        value={hauteur || ""}
                        onChange={(e) => setHauteur(Number(e.target.value))}
                        placeholder="0"
                        className="text-base sm:text-lg"
                      />
                      <p className="text-xs text-muted-foreground">
                        Valeurs disponibles : {dimensionRanges.hauteur.min} mm - {dimensionRanges.hauteur.max} mm (paliers de 100mm)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message d'erreur si dimensions invalides */}
                {largeur > 0 && hauteur > 0 && !isDimensionValid && (
                  <div className="bg-red-50 border border-red-200 p-3 sm:p-4 rounded-lg flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-red-900">Dimensions non disponibles</p>
                      <p className="text-sm text-red-700">
                        Les dimensions {hauteur}x{largeur}mm ne correspondent pas à un produit disponible.
                        Veuillez choisir des dimensions par paliers de 100mm.
                      </p>
                    </div>
                  </div>
                )}

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Configuration par défaut :</strong> Toile noire, structure blanche
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Résumé */}
            <Card className="mb-4 sm:mb-6 bg-primary/5">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold mb-3">Votre configuration :</h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p>
                    <span className="font-medium">Dimensions :</span> Largeur : {largeur} mm - Hauteur : {hauteur} mm
                  </p>
                  <p>
                    <span className="font-medium">Coloris :</span> Toile noire, structure blanche
                  </p>
                </div>
                <Separator className="my-3 sm:my-4" />
                {priceHT > 0 && (
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                      <span>Prix HT</span>
                      <span>{priceHT} €</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                      <span>TVA (20%)</span>
                      <span>{priceTVA} €</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-base sm:text-lg font-semibold">Prix final TTC</span>
                  <span className="text-2xl sm:text-3xl font-bold text-primary">{price} €</span>
                </div>
              </CardContent>
            </Card>

            {/* Badges de confiance (déplacés sous le prix) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Fabrication Locale</p>
                      <p className="text-xs text-muted-foreground">France & Europe</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Ruler className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Pose Express</p>
                      <p className="text-xs text-muted-foreground">15-20 minutes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Haute Qualité</p>
                      <p className="text-xs text-muted-foreground">Matériaux premium</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Garantie 5 ans</p>
                      <p className="text-xs text-muted-foreground">Hors toile</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bouton Acheter */}
            <Button
              size="lg"
              className="w-full mb-6 text-sm sm:text-base"
              disabled={!isDimensionValid}
              onClick={() => {
                if (isDimensionValid) {
                  window.location.href = `/checkout?largeur=${largeur}&hauteur=${hauteur}`;
                }
              }}
            >
              {isDimensionValid ? `Acheter maintenant - ${price} €` : "Sélectionnez des dimensions valides"}
            </Button>

            {/* Badges de réassurance */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Livraison Gratuite</p>
                  <p className="text-xs text-muted-foreground">Sans frais</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <CreditCard className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Paiement Sécurisé</p>
                  <p className="text-xs text-muted-foreground">Crypté SSL</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Garantie</p>
                  <p className="text-xs text-muted-foreground">Sous 30 jours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Onglets Description */}
        <div className="mt-8 sm:mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full flex flex-nowrap md:grid md:grid-cols-4 lg:grid-cols-6 overflow-x-auto md:overflow-visible gap-2 md:gap-0">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="caracteristiques">Caractéristiques</TabsTrigger>
              <TabsTrigger value="avantages">Avantages</TabsTrigger>
              <TabsTrigger value="installation">Entretien</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="garanties">Garanties</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6 prose max-w-none">
                  <h3>Moustiquaire fenêtre enroulable sur-mesure Verticale Anti-Insectes</h3>
                  <p>
                    ✅ <strong>Protégez vos fenêtres des insectes</strong> avec notre moustiquaire fenêtre : Bloquez les
                    moustiques, mouches et autres nuisibles tout en laissant entrer la lumière naturelle 🌞. Adaptée à toutes
                    les tailles de fenêtres, elle assure un confort optimal au quotidien.
                  </p>
                  <p>
                    🛠️ <strong>Matériaux haut de gamme</strong> : Conçue avec des composants résistants aux intempéries ☀️🌧️,
                    cette moustiquaire enroulable verticale est solide, durable et discrète.
                  </p>
                  <p>
                    ⚙️ <strong>Installation facile et rapide</strong> : Pose simple, en autonomie 🛠️ ou avec un professionnel
                    👨‍🔧. Son système enroulable permet une utilisation fluide et un rangement sans gêner la vue ni la lumière.
                  </p>
                  <p>
                    📏 <strong>Sur-mesure pour un ajustement parfait</strong> : Adaptée à votre fenêtre, elle offre une
                    protection optimale contre les insectes tout en restant pratique et élégante 🏡.
                  </p>
                  <p>
                    🛍 <strong>Commandez dès maintenant</strong> et profitez d'une maison protégée tout en conservant un
                    intérieur lumineux et aéré ! 🚀
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="caracteristiques" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Caractéristiques techniques</h3>
                  <ul className="space-y-2">
                    <li>• Type : Moustiquaire enroulable verticale</li>
                    <li>• Dimensions : Hauteur {dimensionRanges.hauteur.min} à {dimensionRanges.hauteur.max} mm × Largeur {dimensionRanges.largeur.min} à {dimensionRanges.largeur.max} mm</li>
                    <li>• Toile : Fibre de verre</li>
                    <li>• Structure : Aluminium extrudé</li>
                    <li>• Installation : 15-20 minutes</li>
                    <li>• Fabrication : France & Europe</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="avantages" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Avantages</h3>
                  <ul className="space-y-2">
                    <li>✅ Protection efficace contre tous les insectes</li>
                    <li>✅ Conserve la luminosité naturelle</li>
                    <li>✅ Ventilation optimale de votre intérieur</li>
                    <li>✅ Installation rapide et facile</li>
                    <li>✅ Système enroulable discret</li>
                    <li>✅ Matériaux résistants aux intempéries</li>
                    <li>✅ Sur-mesure pour un ajustement parfait</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Entretien</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Entretien de votre moustiquaire</h4>
                      <p className="text-muted-foreground">
                        Nettoyage simple à l'eau savonneuse. Ne pas utiliser de produits abrasifs.
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Pour un entretien optimal, nettoyez régulièrement la toile avec un chiffon doux humide. Évitez les détergents agressifs qui pourraient endommager les matériaux.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="questions" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Questions fréquentes</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Comment prendre les mesures ?</h4>
                      <p className="text-muted-foreground">
                        Mesurez la largeur et la hauteur de votre fenêtre en millimètres. Pour plus de précision, consultez
                        notre guide de prise de mesure.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Quel délai de livraison ?</h4>
                      <p className="text-muted-foreground">
                        Livraison gratuite sous 2 à 3 semaines après validation de votre commande.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Puis-je installer moi-même ?</h4>
                      <p className="text-muted-foreground">
                        Oui ! L'installation est simple et rapide (15-20 min). Notices détaillées fournies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="garanties" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Livraison & Garanties</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Livraison gratuite</h4>
                      <p className="text-muted-foreground">
                        Livraison offerte en France métropolitaine. Délai : 2 à 3 semaines.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Garantie 5 ans</h4>
                      <p className="text-muted-foreground">
                        Garantie constructeur de 5 ans sur la structure (hors toile). Durabilité assurée.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Garantie satisfaction</h4>
                      <p className="text-muted-foreground">
                        Satisfait ou remboursé sous 30 jours. Retour gratuit.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
