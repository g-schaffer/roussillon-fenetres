import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCTAProps {
  title: string;
  description: string;
}

export function ProductCTA({ title, description }: ProductCTAProps) {
  return (
    <div className="max-w-3xl mx-auto mt-16">
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg mb-6 opacity-90">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+33468732356">
                Nous appeler
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">
                Demander un devis
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
