import Image from "next/image";
import { ProductCTA } from "@/components/product-cta";
import { Badge } from "@/components/ui/badge";


export default function PortesPage() {
  const sections = [
    {
      title: "Véritable porte fermière",
      subtitle: "Authenticité et robustesse",
      description: "Nos portes fermières allient le charme traditionnel à des performances modernes. Fabriquées en bois massif, elles offrent une isolation thermique optimale et une résistance remarquable aux intempéries. Leur style rustique s'intègre parfaitement aux maisons de caractère et aux propriétés rurales.",
      image: "/porte1.png"
    },
    {
      title: "Portes de styles",
      subtitle: "Élégance sur mesure",
      description: "Une large gamme de styles pour s'adapter à l'architecture de votre maison. Du design contemporain aux lignes classiques, chaque porte est personnalisable selon vos goûts : choix des essences de bois, finitions, vitrages, et accessoires. Créez une entrée unique qui reflète votre personnalité.",
      image: "/porte2.png"
    },
    {
      title: "Portes pleines à lames massives",
      subtitle: "Sécurité et performance",
      description: "Nos portes pleines en lames massives garantissent une isolation acoustique et thermique exceptionnelle. Leur construction robuste assure une sécurité renforcée pour votre domicile. Le bois massif offre également une durabilité incomparable et un aspect noble qui traverse les années.",
      image: "/porte3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/catalogue_porte.jpg"
          alt="Portes en bois"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Bois
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Les portes bois
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos portes d'entrée en bois haut de gamme contribueront harmonieusement au charme de votre domicile
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
          title="Intéressé par nos portes en bois ?"
          description="Contactez-nous pour obtenir un devis personnalisé et découvrir toutes les options disponibles pour votre projet."
        />
      </div>
    </div>
  );
}
