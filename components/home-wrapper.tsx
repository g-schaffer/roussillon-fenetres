"use client";

import { useEffect } from "react";

export function HomeWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Cache la navbar sur la page d'accueil
    const header = document.querySelector("body > header");
    if (header) {
      (header as HTMLElement).style.display = "none";
    }

    // Restaure la navbar quand on quitte la page
    return () => {
      const header = document.querySelector("body > header");
      if (header) {
        (header as HTMLElement).style.display = "";
      }
    };
  }, []);

  return <>{children}</>;
}
