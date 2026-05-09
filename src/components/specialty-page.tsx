import { Link } from "@tanstack/react-router";

export interface SpecialtyContent {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  consultorios: number;
  experience: string[];
  preparation: string[];
  note?: string;
}

export function SpecialtyPage({ data }: { data: SpecialtyContent }) {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative">
        <div className="container-fluid grid gap-12 py-20 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-6 lg:pt-12">
            <p className="eyebrow animate-fade-up">{data.eyebrow}</p>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl animate-fade-up">
              {data.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-up">
              {data.lede}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
              <Link to="/" hash="contacto" className="btn-primary">
                Reservar tu turno
              </Link>
              <Link to="/" className="text-sm underline-grow self-center text-primary">
                Volver al inicio
              </Link>
            </div>
            <div className="mt-14 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="font-display text-4xl text-secondary">
                {data.consultorios.toString().padStart(2, "0")}
              </span>
              <span className="max-w-[18ch]">
                {data.consultorios > 1 ? "consultorios disponibles" : "consultorio disponible"} para tu atención
              </span>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:aspect-[3/4] lg:translate-y-8">
              <img
                src={data.image}
                alt={data.title}
                className="h-full w-full object-cover"
                loading="eager"
                width={1600}
                height={1200}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-[2rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience + Preparation */}
      <section className="container-fluid py-24 lg:py-32">
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">La experiencia</p>
            <h2 className="mt-5 text-4xl lg:text-5xl">Cómo te vas a sentir.</h2>
          </div>
          <ul className="lg:col-span-7 space-y-8">
            {data.experience.map((item, i) => (
              <li key={i} className="flex gap-6 border-b border-border pb-8 last:border-0">
                <span className="font-display text-secondary text-2xl tabular-nums">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed text-foreground/85">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-32 grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Antes de venir</p>
            <h2 className="mt-5 text-4xl lg:text-5xl">Una preparación simple.</h2>
          </div>
          <ul className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
            {data.preparation.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-foreground/85 leading-relaxed"
              >
                <span className="plus-mark text-xl leading-none">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {data.note && (
          <p className="mt-24 max-w-2xl text-sm leading-relaxed text-muted-foreground italic">
            {data.note}
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="container-fluid pb-24">
        <div className="rounded-[2.5rem] bg-primary px-8 py-20 text-primary-foreground sm:px-16 lg:px-24">
          <p className="eyebrow !text-primary-foreground/70">Cuando quieras</p>
          <h2 className="mt-5 text-4xl lg:text-6xl !text-primary-foreground max-w-3xl">
            Estamos listos para recibirte con tiempo y calma.
          </h2>
          <div className="mt-10">
            <Link
              to="/"
              hash="contacto"
              className="inline-flex items-center gap-3 rounded-full bg-primary-foreground text-primary px-8 py-4 font-medium hover:bg-secondary hover:text-primary-foreground transition-all"
            >
              Reservar mi turno →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
