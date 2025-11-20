import Image from "next/image";
import { ProductCTA } from "@/components/product-cta";
import { Badge } from "@/components/ui/badge";


export default function VerandasPage() {
  const sections = [
    {
      title: "Pergola avec lames en S",
      subtitle: "Design et ventilation naturelle",
      description: "La pergola à lames en S offre une esthétique moderne tout en assurant une ventilation optimale. Son design innovant permet une circulation d'air naturelle même lorsque les lames sont fermées, créant un espace confortable en toute saison.",
      image: "/verandas1.webp"
    },
    {
      title: "Pergola à lames rétractables",
      subtitle: "Modulez votre espace selon vos envies",
      description: "Profitez d'une flexibilité totale avec nos pergolas à lames rétractables. Contrôlez l'ensoleillement et l'aération de votre terrasse selon vos besoins. Motorisées ou manuelles, elles s'adaptent instantanément aux conditions météorologiques.",
      image: "/verandas2.jpg"
    },
    {
      title: "Vérandas sur mesure",
      subtitle: "Un projet 3D pour visualiser vos rêves",
      description: "Concevez la véranda de vos rêves avec notre service de conception 3D personnalisé. Nous créons des espaces de vie supplémentaires parfaitement intégrés à votre habitat, alliant luminosité, isolation et design. Chaque projet est unique et adapté à votre architecture.",
      image: "/verandas3.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Image bannière pleine largeur */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/catalogue_verandas.jpg"
          alt="Vérandas et Pergolas"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Innovation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vérandas et Pergolas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Toujours à la pointe, Roussillon Fenêtres dispose de choix de gammes de pergolas innovantes avec d'une part la pergola avec lames en S et d'autre part la pergola à lames rétractables. De même, nous avons la possibilité de concevoir des vérandas à votre image avec proposition d'un projet 3D.
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
          title="Un projet de véranda ou pergola ?"
          description="Contactez-nous pour bénéficier d'une étude personnalisée avec visualisation 3D de votre projet et obtenir un devis sur mesure."
        />
      </div>
    </div>
  );
}
