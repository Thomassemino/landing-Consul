import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 pb-12 pt-24 border-t border-border/60">
      <div className="container-fluid grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-baseline gap-0.5 text-2xl">
            <span className="plus-mark text-3xl">+</span>
            <span className="font-display text-primary">consultorios</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Un espacio creado para que tu salud se sienta como una conversación tranquila.
            Atención humana, profesional y a tu ritmo.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="eyebrow mb-5">Especialidades</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/odontologia" className="hover:text-secondary transition-colors">Odontología</Link></li>
            <li><Link to="/fonoaudiologia" className="hover:text-secondary transition-colors">Fonoaudiología</Link></li>
            <li><Link to="/medicina-general" className="hover:text-secondary transition-colors">Medicina general</Link></li>
            <li><Link to="/multiespacio" className="hover:text-secondary transition-colors">Multiespacio</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="eyebrow mb-5">Contacto</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Lunes a viernes · 8:00 a 20:00</li>
            <li>Sábados · 9:00 a 14:00</li>
            <li className="text-foreground">hola@masconsultorios.com</li>
            <li className="text-foreground">+54 11 0000 0000</li>
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
