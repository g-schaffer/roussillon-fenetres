import Image from "next/image";
import { ProductCTA } from "@/components/product-cta";
import { Badge } from "@/components/ui/badge";


export default function VoletsBattantsPage() {
  const sections = [
    {
      title: "Volets battants sur mesure",
      subtitle: "Résistance et authenticité",
      description: "Fabriqués sur mesure, les volets Roussillon Fenêtres sont résistants et authentiques. Qu'ils soient PVC, bois ou aluminium, ils sauront s'adapter à votre domicile. Chaque volet est conçu pour s'intégrer parfaitement à l'architecture de votre maison tout en offrant une protection optimale et une durabilité exceptionnelle.",
      image: "/volet1.jpg"
    },
    {
      title: "Couleurs",
      subtitle: "Plus de 300 coloris RAL au choix",
      description: "Roussillon Fenêtres vous propose plus de 300 coloris RAL au choix sans coût additionnel. Personnalisez vos volets selon vos préférences et harmonisez-les avec votre façade. Les volets en aluminium bénéficient des labels Qualicoat et Qualimarine, garantissant une qualité de finition et une résistance à la corrosion exceptionnelles.",
      image: "/volet1.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/volets_battant.jpeg"
          alt="Volets Battants"
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
            Volets Battants
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fabriqués sur mesure, les volets Roussillon Fenêtres sont résistants et authentiques. Qu'ils soient PVC, bois ou aluminium, ils sauront s'adapter à votre domicile.
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
          title="Intéressé par nos volets battants ?"
          description="Contactez-nous pour découvrir nos 300 coloris RAL et obtenir un devis personnalisé pour vos volets sur mesure."
        />
      </div>
    </div>
  );
}
