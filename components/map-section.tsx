"use client";

import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function MapSection() {
  // Adresse de Roussillon Fenêtres
  const address = "6 Rue Aristide Berges, 66330 Cabestany, France";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=6+Rue+Aristide+Berges,66330+Cabestany,France`;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Où nous trouver</h2>
          <p className="text-xl text-muted-foreground">
            Venez découvrir notre showroom et rencontrer notre équipe
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                  <p className="text-muted-foreground">
                    Roussillon Fenêtres<br />
                    6 Rue Aristide Berges<br />
                    66330 Cabestany
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                  <a
                    href="tel:+33468732356"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    04 68 73 23 56
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a
                    href="mailto:roussillonfenetres@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    roussillonfenetres@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Lundi - Vendredi: 9h - 12h</p>
                    <p>Samedi - Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Carte Google Maps */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-xl h-full min-h-[600px]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "600px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
