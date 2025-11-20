import Image from "next/image";
import { ProductCTA } from "@/components/product-cta";
import { Badge } from "@/components/ui/badge";


export default function StoresInterieursPage() {
  const sections = [
    {
      title: "Stores intérieurs innovants",
      subtitle: "Technologie spatiale au service de votre confort",
      description: "Toujours dans le but de se différencier en terme d'innovation, les stores Roussillon Fenêtres ont la particularité d'apporter une résistance thermique supérieure aux solutions classiques, grâce à des techniques acquises dans la recherche spatiale.",
      image: "/stores_interieur.jpg"
    },
    {
      title: "Technologie Mylar haute performance",
      subtitle: "Performance thermique exceptionnelle",
      description: "Grâce à leurs faces réflectrices composées de ruban Mylar, inséré dans un maillage de fils polyester tissés, nos stores vous offrent ombre et fraîcheur en été et permettent d'éviter les déperditions thermiques l'hiver. Cette technologie innovante crée une barrière thermique efficace tout en laissant passer la lumière naturelle.",
      image: "/stores_interieur.jpg"
    },
    {
      title: "Large gamme de styles",
      subtitle: "Des stores adaptés à chaque pièce",
      description: "Découvrez notre collection complète de stores intérieurs : enrouleurs, vénitiens, plissés, bateau ou japonais. Chaque modèle est disponible dans une vaste palette de couleurs et de textures pour s'harmoniser parfaitement avec votre décoration intérieure. Du style contemporain au classique, trouvez le store qui correspond à vos goûts.",
      image: "/stores_interieur.jpg"
    },
    {
      title: "Contrôle de la lumière et intimité",
      subtitle: "Modulez votre espace de vie",
      description: "Nos stores intérieurs vous permettent de contrôler précisément la luminosité de vos pièces tout en préservant votre intimité. Selon vos besoins, optez pour des toiles occultantes, tamisantes ou translucides. La motorisation est disponible pour un confort d'utilisation optimal, avec possibilité de programmation et de contrôle à distance.",
      image: "/stores_interieur.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/stores_interieur.jpg"
          alt="Stores Intérieurs"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Stores
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stores Intérieurs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Toujours dans le but de se différencier en terme d'innovation, les stores Roussillon Fenêtres ont la particularité d'apporter une résistance thermique supérieure aux solutions classiques, grâce à des techniques acquises dans la recherche spatiale.
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
          title="Intéressé par nos stores intérieurs ?"
          description="Contactez-nous pour découvrir nos stores intérieurs haute performance avec technologie Mylar et obtenir un devis personnalisé."
        />
      </div>
    </div>
  );
}
