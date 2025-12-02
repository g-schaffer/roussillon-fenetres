"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle2, Users, Star } from "lucide-react";
import Image from "next/image";

export function StatsSection() {
  const stats = [
    {
      icon: <FileText className="h-6 w-6" />,
      number: "1,818",
      label: "Devis réalisés"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      number: "1,577",
      label: "Clients satisfaits"
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "1,392",
      label: "Clients récurrents"
    },
    {
      icon: <Star className="h-6 w-6 fill-current" />,
      number: "4.6/5",
      label: "Note Google (114 avis)",
      link: "https://www.google.com/maps/place/Roussillon+fen%C3%AAtres/@42.6909395,2.9228624,17z/data=!4m16!1m9!3m8!1s0x12b06f3d461ef583:0x8a0a000ba453363e!2sRoussillon+fen%C3%AAtres!8m2!3d42.6909395!4d2.9228624!9m1!1b1!16s%2Fg%2F11p6wyhr29!3m5!1s0x12b06f3d461ef583:0x8a0a000ba453363e!8m2!3d42.6909395!4d2.9228624!16s%2Fg%2F11p6wyhr29?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Partenaire */}
      <div className="flex justify-center mb-12">
        <Image
          src="/partenaire.jpg"
          alt="Partenaire"
          width={700}
          height={80}
          className="object-contain max-w-full h-auto border-2 border-gray-200 rounded-lg"
        />
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <Card key={index} className={stat.link ? "cursor-pointer hover:shadow-lg transition-shadow" : ""}>
            <CardContent
              className="flex flex-col items-center justify-center p-6"
              onClick={() => stat.link && window.open(stat.link, '_blank')}
            >
              <div className="rounded-full bg-primary/10 p-3 text-primary mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground text-center">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
