import Image from "next/image";
import { ProductCTA } from "@/components/product-cta";
import { Badge } from "@/components/ui/badge";


export default function StoresExterieursPage() {
  const sections = [
    {
      title: "Les stores extérieurs",
      subtitle: "Esthétique et confort",
      description: "Les stores contribuent à l'esthétique et à l'isolation thermique de votre domicile, tout en vous permettant de bénéficier de la luminosité extérieure. Ils créent des espaces de vie supplémentaires en extérieur, protégés du soleil et des intempéries, pour profiter pleinement de votre terrasse ou jardin.",
      image: "/stores_exterieur.jpg"
    },
    {
      title: "Stores bannes",
      subtitle: "Protection solaire élégante",
      description: "Nos stores bannes motorisés ou manuels s'adaptent parfaitement à votre façade. Disponibles dans une large gamme de dimensions et de coloris, ils offrent une protection efficace contre les rayons UV tout en créant une zone d'ombre agréable. Les toiles techniques haute qualité résistent aux intempéries et conservent leurs couleurs dans le temps.",
      image: "/stores_exterieur.jpg"
    },
    {
      title: "Brise-soleil orientables",
      subtitle: "Contrôle optimal de la luminosité",
      description: "Les brise-soleil orientables vous permettent de moduler l'ensoleillement selon vos besoins. Leurs lames réglables offrent un contrôle précis de la lumière et de la ventilation. Idéaux pour les grandes baies vitrées, ils participent à l'isolation thermique de votre habitation tout en préservant votre intimité.",
      image: "/stores_exterieur.jpg"
    },
    {
      title: "Automatisation et confort",
      subtitle: "Technologie au service du bien-être",
      description: "Optez pour la motorisation de vos stores extérieurs avec commande radio, télécommande ou application smartphone. Les capteurs solaires et de vent permettent une gestion automatique pour une protection optimale de vos stores et un confort maximal. Intégration possible avec les systèmes domotiques existants.",
      image: "/stores_exterieur.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/stores_exterieur.jpg"
          alt="Stores Extérieurs"
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
            Stores Extérieurs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les stores contribuent à l'esthétique et à l'isolation thermique de votre domicile, tout en vous permettant de bénéficier de la luminosité extérieure.
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
          title="Intéressé par nos stores extérieurs ?"
          description="Contactez-nous pour découvrir nos solutions de stores extérieurs et obtenir un devis personnalisé adapté à votre projet."
        />
      </div>
    </div>
  );
}
