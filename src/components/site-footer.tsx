import { Link } from "@tanstack/react-router";
import logoColor from "@/assets/logo-color.webp";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="mt-32 pb-12 pt-24 border-t border-border/60">
      <div className="container-fluid grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src={logoColor}
            alt="+consultorios"
            width={800}
            height={307}
            loading="lazy"
            className="h-16 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Un espacio creado para que tu salud se sienta como una conversación tranquila.
            Atención humana, profesional y a tu ritmo.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="eyebrow mb-5">Especialidades</p>
          <ul className="space-y-1 text-sm">
            <li><Link to="/odontologia" className="inline-block py-2.5 hover:text-secondary transition-colors">Odontología</Link></li>
            <li><Link to="/fonoaudiologia" className="inline-block py-2.5 hover:text-secondary transition-colors">Fonoaudiología</Link></li>
            <li><Link to="/medicina-general" className="inline-block py-2.5 hover:text-secondary transition-colors">Medicina general</Link></li>
            <li><Link to="/multiespacio" className="inline-block py-2.5 hover:text-secondary transition-colors">Multiespacio</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="eyebrow mb-5">Contacto</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="py-1">Lunes a viernes · 8:00 a 20:00</li>
            <li className="py-1">Sábados · 9:00 a 14:00</li>
            <li><a href={`mailto:${CONTACT.email}`} className="inline-block py-2.5 text-foreground hover:text-secondary transition-colors [overflow-wrap:anywhere]">{CONTACT.email}</a></li>
            <li><a href={CONTACT.phoneTel} className="inline-block py-2.5 text-foreground hover:text-secondary transition-colors">{CONTACT.phoneDisplay}</a></li>
            <li className="pt-2">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 font-medium text-white transition-colors hover:bg-secondary/85"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Escribinos por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid mt-16 flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} +consultorios — Todos los derechos reservados</p>
        <p>Hecho con cuidado para quienes nos eligen.</p>
      </div>
    </footer>
  );
}
