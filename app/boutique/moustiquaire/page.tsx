"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Check, Home, ChevronRight, Truck, Shield, CreditCard, Ruler, AlertCircle } from "lucide-react";
import { findPrice, findPriceHT, getDimensionRanges } from "@/lib/stripe-prices";

export default function MoustiquairePage() {
  const [largeur, setLargeur] = useState(0);
  const [hauteur, setHauteur] = useState(0);

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
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8 text-muted-foreground">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galerie d'images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-white">
              <Image
                src="/moustiquaire_1.png"
                alt="Moustiquaire fenêtre enroulable"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Badges de confiance */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          </div>

          {/* Configuration */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Moustiquaires Fenêtres
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Moustiquaire fenêtre enroulable sur-mesure Verticale Anti-Insectes
            </h1>

            <Card className="mb-6">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Configurez votre moustiquaire sur-mesure
                  </h2>
                  <p className="text-muted-foreground">
                    Indiquez les dimensions de votre fenêtre pour obtenir un devis instantané
                  </p>
                </div>

                {/* Dimensions */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">
                    Dimensions <span className="text-red-500">*</span>
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="largeur">Largeur (mm)</Label>
                      <Input
                        id="largeur"
                        type="number"
                        min={dimensionRanges.largeur.min}
                        max={dimensionRanges.largeur.max}
                        step="100"
                        value={largeur || ""}
                        onChange={(e) => setLargeur(Number(e.target.value))}
                        placeholder="0"
                        className="text-lg"
                      />
                      <p className="text-xs text-muted-foreground">
                        Valeurs disponibles : {dimensionRanges.largeur.min} mm - {dimensionRanges.largeur.max} mm (paliers de 100mm)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hauteur">Hauteur (mm)</Label>
                      <Input
                        id="hauteur"
                        type="number"
                        min={dimensionRanges.hauteur.min}
                        max={dimensionRanges.hauteur.max}
                        step="100"
                        value={hauteur || ""}
                        onChange={(e) => setHauteur(Number(e.target.value))}
                        placeholder="0"
                        className="text-lg"
                      />
                      <p className="text-xs text-muted-foreground">
                        Valeurs disponibles : {dimensionRanges.hauteur.min} mm - {dimensionRanges.hauteur.max} mm (paliers de 100mm)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message d'erreur si dimensions invalides */}
                {largeur > 0 && hauteur > 0 && !isDimensionValid && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-start gap-3">
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
            <Card className="mb-6 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Votre configuration :</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Dimensions :</span> Largeur : {largeur} mm - Hauteur : {hauteur} mm
                  </p>
                  <p>
                    <span className="font-medium">Coloris :</span> Toile noire, structure blanche
                  </p>
                </div>
                <Separator className="my-4" />
                {priceHT > 0 && (
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Prix HT</span>
                      <span>{priceHT} €</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>TVA (20%)</span>
                      <span>{priceTVA} €</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Prix final TTC</span>
                  <span className="text-3xl font-bold text-primary">{price} €</span>
                </div>
              </CardContent>
            </Card>

            {/* Bouton Acheter */}
            <Button
              size="lg"
              className="w-full mb-6"
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
            <div className="grid grid-cols-3 gap-4 mb-8">
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
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="caracteristiques">Caractéristiques</TabsTrigger>
              <TabsTrigger value="avantages">Avantages</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
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
                    <li>• Toile : Fibre de verre (Noire ou Grise)</li>
                    <li>• Structure : Aluminium extrudé</li>
                    <li>• Coloris structure : 7 options disponibles</li>
                    <li>• Garantie : 5 ans (hors toile)</li>
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
                    <li>✅ Garantie 5 ans</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Installation et entretien</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Installation</h4>
                      <p className="text-muted-foreground mb-2">
                        Pose simple en 15-20 minutes, en autonomie ou avec un professionnel.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          📄 Notice montage - pose en tunnel
                        </Button>
                        <Button variant="outline" size="sm">
                          📄 Notice montage - pose en applique
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Entretien</h4>
                      <p className="text-muted-foreground">
                        Nettoyage simple à l'eau savonneuse. Ne pas utiliser de produits abrasifs.
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
