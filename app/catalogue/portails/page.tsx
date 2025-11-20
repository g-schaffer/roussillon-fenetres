import Image from "next/image";
import { ProductCTA } from "@/components/product-cta";
import { Badge } from "@/components/ui/badge";


export default function PortailsPage() {
  const sections = [
    {
      title: "Portails PVC",
      subtitle: "Robustesse et entretien facile",
      description: "L'avantage de nos portails PVC est que ces derniers sont renforcés soit par des structures en acier ou en inox. Cette conception garantit une solidité exceptionnelle et une durabilité dans le temps, tout en conservant les avantages du PVC : légèreté, facilité d'entretien et excellente résistance aux intempéries. Disponibles dans de nombreux coloris et styles pour s'harmoniser avec votre habitat.",
      image: "/catalogue_portail.webp"
    },
    {
      title: "Portails Aluminium",
      subtitle: "Élégance et haute résistance",
      description: "L'avantage de nos portails en aluminium est que le thermo-laquage certifié Qualicoat et Qualimarine a une forte résistance aux embruns marins. De plus, nous vous proposons des modèles originaux grâce au procédé de la découpe laser. L'aluminium offre une esthétique moderne et épurée, avec des lignes élégantes et des designs personnalisables. Motorisation disponible pour un confort d'utilisation optimal.",
      image: "/catalogue_portail.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/catalogue_portail.webp"
          alt="Portails"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Portails
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Portails
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Roussillon Fenêtres dispose de toutes les solutions nécessaires afin de s'adapter à la configuration de votre habitat en ce qui concerne les portails.
          </p>
        </div>

        {/* Sections alternées */}
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="max-w-7xl mx-auto mb-16">
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
          title="Un projet de portail ?"
          description="Contactez-nous pour découvrir nos solutions de portails PVC et aluminium sur mesure et obtenir un devis personnalisé."
        />
      </div>
    </div>
  );
}
