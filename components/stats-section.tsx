import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle2, Users } from "lucide-react";

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
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-primary/10 p-3 text-primary mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
