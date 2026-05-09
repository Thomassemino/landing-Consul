import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/odontologia" as const, label: "Odontología" },
  { to: "/fonoaudiologia" as const, label: "Fonoaudiología" },
  { to: "/medicina-general" as const, label: "Medicina general" },
  { to: "/multiespacio" as const, label: "Multiespacio" },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
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
        <Link to="/" className="flex items-baseline gap-0.5 text-xl font-medium">
          <span className={`plus-mark text-2xl ${solid ? "" : "text-secondary"}`}>+</span>
          <span
            className={`font-display tracking-tight ${
              solid ? "text-primary" : "text-primary-foreground"
            }`}
          >
            consultorios
          </span>
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
        <Link
          to="/"
          hash="contacto"
          className={`text-sm rounded-full px-5 py-2.5 transition-all ${
            solid
              ? "bg-primary text-primary-foreground hover:bg-secondary"
              : "bg-primary-foreground text-primary hover:bg-secondary hover:text-primary-foreground"
          }`}
        >
          Reservar turno
        </Link>
      </div>
    </header>
  );
}
