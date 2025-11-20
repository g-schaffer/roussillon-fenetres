import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Award, Shield, FileCheck, Star, Download } from "lucide-react";

export default function CertificationsPage() {
  const certifications = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "CEKAL OKNOPLAST",
      subtitle: "Certification vitrage",
      description: "Certification de qualité pour les vitrages isolants garantissant des performances optimales.",
      pdfUrl: "/CEKAL-OKNOPLAST.pdf"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "AEV CHARME MINI OB",
      subtitle: "Certification étanchéité",
      description: "Certification garantissant l'étanchéité à l'Air, à l'Eau et la résistance au Vent de nos menuiseries.",
      pdfUrl: "/AEV-CHARME-MINI-OB.pdf"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "ISO 9001",
      subtitle: "Certification internationale",
      description: "Norme internationale garantissant un système de management de la qualité efficace et reconnu.",
      pdfUrl: "/ISO-9001.pdf"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "QUALIMARINE & QUALICOAT",
      subtitle: "La certification la plus exigeante",
      description: "Toutes les opérations sont rigoureusement contrôlées, à tous les stades, par des laboratoires et des auditeurs indépendants et accrédités, afin de garantir la qualité supérieure des pièces en aluminium thermolaquées destinées à l'architecture, dans toutes les conditions atmosphériques."
    }
  ];

  const garanties = [
    {
      title: "Carnet de garantie OKNOPLAST - Garantie FR 2019",
      description: "Documentation complète de garantie pour tous nos produits OKNOPLAST conforme aux normes françaises en vigueur.",
      pdfUrl: "/Garantie-FR_2019.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Qualité & Excellence
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre engagement envers la qualité et l'excellence est reconnu par les certifications les plus prestigieuses de l'industrie.
          </p>
        </div>

        {/* Certifications */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-4 text-primary flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2">
                        {cert.subtitle}
                      </Badge>
                      <CardTitle className="text-2xl mb-2">{cert.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {cert.description}
                  </CardDescription>
                  {cert.pdfUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Télécharger la certification
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="max-w-6xl mx-auto mb-16" />

        {/* Garanties */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Nos Garanties
            </h2>
            <p className="text-muted-foreground">
              Nous nous engageons à vous offrir des garanties complètes pour votre tranquillité d'esprit
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            {garanties.map((garantie, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="rounded-full bg-green-100 dark:bg-green-900 p-2 text-green-600 dark:text-green-400 flex-shrink-0">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{garantie.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {garantie.description}
                      </p>
                    </div>
                  </div>
                  {garantie.pdfUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <a href={garantie.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Télécharger la garantie
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Des questions sur nos certifications ?
              </h3>
              <p className="mb-6 opacity-90">
                Notre équipe se tient à votre disposition pour vous fournir tous les détails sur nos certifications et garanties.
              </p>
              <a
                href="mailto:contact@roussillon-fenetres.fr"
                className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary hover:bg-primary-foreground/90 transition-colors"
              >
                Nous contacter
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
