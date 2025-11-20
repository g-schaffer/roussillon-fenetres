"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FileText, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "Notre catalogue", href: "/catalogue" },
    { label: "Nos réalisations", href: "/realisations" },
    { label: "Rénovations", href: "/renovations" },
    { label: "Nos certifications", href: "/certifications" },
    { label: "Contact", href: "/contact" },
    { label: "Distributeur OKNOPLAST", href: "https://oknoplast.fr/boutiques/roussillon-fenetre/", external: true }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.ico"
            alt="Roussillon Fenêtres"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Accueil
          </Link>
          <Link
            href="/catalogue"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Notre catalogue
          </Link>
          <Link
            href="/realisations"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Nos réalisations
          </Link>
          <Link
            href="/renovations"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Rénovations
          </Link>
          <Link
            href="/certifications"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Nos certifications
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <a
            href="https://oknoplast.fr/boutiques/roussillon-fenetre/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Distributeur OKNOPLAST
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:flex">
            <Link href="/contact" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Demander un devis</span>
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors hover:text-primary px-2 py-2"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium transition-colors hover:text-primary px-2 py-2"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <Button asChild className="mt-4">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <FileText className="h-4 w-4 mr-2" />
                    Demander un devis
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
