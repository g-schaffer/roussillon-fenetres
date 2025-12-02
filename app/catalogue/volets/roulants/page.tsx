import Image from "next/image";
import { ProductCTA } from "@/components/product-cta";
import { Badge } from "@/components/ui/badge";


export default function VoletsRoulantsPage() {
  const sections = [
    {
      title: "Volets roulants rénovation",
      subtitle: "Confort et esthétique",
      description: "Les volets roulants rénovation représentent une solution idéale pour améliorer le confort, la sécurité et l'esthétique de votre habitation. Conçus pour s'adapter parfaitement aux fenêtres existantes, ils offrent une multitude d'avantages et se posent sans travaux lourds.",
      image: "/volet_roulant.jpg"
    },
    {
      title: "Isolation Thermique et Acoustique",
      subtitle: "Économies d'énergie garanties",
      description: "Nos volets roulants créent une barrière efficace contre les variations de température et les nuisances sonores. En hiver, ils limitent les déperditions de chaleur, et en été, ils protègent de la chaleur excessive. Cette isolation renforcée vous permet de réaliser des économies d'énergie significatives tout en améliorant votre confort au quotidien.",
      image: "/volet_roulant2.jpg"
    },
    {
      title: "Sécurité Renforcée",
      subtitle: "Protection optimale de votre domicile",
      description: "Les volets roulants constituent une protection efficace contre les tentatives d'effraction. Équipés de lames robustes et de systèmes de verrouillage performants, ils dissuadent les intrusions et protègent votre habitation. Certains modèles peuvent être motorisés avec commande à distance pour simuler une présence même en votre absence.",
      image: "/volet_roulant3.jpg"
    },
    {
      title: "Facilité d'Installation",
      subtitle: "Pose rapide et sans gros œuvre",
      description: "Spécialement conçus pour la rénovation, nos volets roulants s'installent facilement sur vos fenêtres existantes sans nécessiter de gros travaux de maçonnerie. Le coffre se fixe en applique sur la façade ou dans la tableau, selon vos préférences. Cette solution pratique vous permet de bénéficier rapidement de tous les avantages des volets roulants.",
      image: "/volet_roulant4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/volet_roulant2.jpg"
          alt="Volets Roulants"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Volets
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Volets Roulants
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les volets roulants rénovation représentent une solution idéale pour améliorer le confort, la sécurité et l'esthétique de votre habitation. Conçus pour s'adapter parfaitement aux fenêtres existantes, ils offrent une multitude d'avantages.
          </p>
        </div>

        {/* Sections alternées */}
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={section.title} className="max-w-7xl mx-auto mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Texte */}
                <div className={`${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  <h3 className="text-xl font-semibold text-muted-foreground mb-4">
                    {section.subtitle}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {section.description}
                  </p>
                </div>

                {/* Image */}
                <div className={`relative h-96 lg:h-[500px] rounded-lg overflow-hidden ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* Call to action */}
        <ProductCTA
          title="Intéressé par nos volets roulants ?"
          description="Contactez-nous pour découvrir nos solutions de volets roulants en rénovation et obtenir un devis personnalisé."
        />
      </div>
    </div>
  );
}
