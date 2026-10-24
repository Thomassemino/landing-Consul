import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoColor from "@/assets/logo-color.webp";
import logoWhite from "@/assets/logo-white.webp";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  { to: "/odontologia" as const, label: "Odontología" },
  { to: "/fonoaudiologia" as const, label: "Fonoaudiología" },
  { to: "/medicina-general" as const, label: "Medicina general" },
  { to: "/multiespacio" as const, label: "Multiespacio" },
];

export function SiteHeader() {
  const location = useLocation();
  const transparent = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-fluid flex items-center justify-between py-5">
        <Link to="/" aria-label="+consultorios — Inicio" className="flex items-center">
          <img
            src={solid ? logoColor : logoWhite}
            alt="+consultorios"
            width={800}
            height={307}
            className="h-10 w-auto sm:h-11"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-sm underline-grow transition-colors ${
                solid
                  ? "text-foreground/80 hover:text-secondary"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
              activeProps={{
                className: solid ? "text-secondary" : "text-primary-foreground",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/"
            hash="contacto"
            className={`hidden text-sm rounded-full px-5 py-2.5 transition-all sm:inline-flex ${
              solid
                ? "bg-primary text-primary-foreground hover:bg-secondary"
                : "bg-primary-foreground text-primary hover:bg-secondary hover:text-primary-foreground"
            }`}
          >
            Reservar turno
          </Link>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              aria-label="Abrir menú"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
                solid
                  ? "text-primary hover:bg-primary/10"
                  : "text-primary-foreground hover:bg-primary-foreground/15"
              }`}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[85vw] max-w-sm flex-col">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <SheetDescription className="sr-only">
                Especialidades y reserva de turnos
              </SheetDescription>
              <nav className="mt-10 flex flex-col">
                {nav.map((n) => (
                  <SheetClose asChild key={n.to}>
                    <Link
                      to={n.to}
                      className="border-b border-border/60 py-5 font-display text-2xl text-primary transition-colors hover:text-secondary"
                      activeProps={{ className: "text-secondary" }}
                    >
                      {n.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Link to="/" hash="contacto" className="btn-primary mt-auto justify-center">
                  Reservar turno
                </Link>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
