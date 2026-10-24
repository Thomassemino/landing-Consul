import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import logoWhite from "@/assets/logo-white.webp";
import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import odontoImg from "@/assets/odontologia.jpg";
import fonoImg from "@/assets/fonoaudiologia.jpg";
import medGenImg from "@/assets/medicina-general.jpg";
import multiImg from "@/assets/multiespacio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+consultorios — Atención médica que se siente bien" },
      {
        name: "description",
        content:
          "Odontología, fonoaudiología, medicina general y un espacio multiespacio. Una atención cercana, profesional y a tu ritmo.",
      },
    ],
  }),
  component: Home,
});

const specialties = [
  {
    slug: "odontologia",
    to: "/odontologia" as const,
    name: "Odontología",
    blurb: "Cuidados dentales con tiempo, precisión y mucha calma.",
    image: odontoImg,
  },
  {
    slug: "fonoaudiologia",
    to: "/fonoaudiologia" as const,
    name: "Fonoaudiología",
    blurb: "Acompañamiento para tu voz, tu audición y tu comunicación.",
    image: fonoImg,
  },
  {
    slug: "medicina-general",
    to: "/medicina-general" as const,
    name: "Medicina general",
    blurb: "Una mirada integral cuando necesitás escuchar a tu cuerpo.",
    image: medGenImg,
  },
  {
    slug: "multiespacio",
    to: "/multiespacio" as const,
    name: "Multiespacio",
    blurb: "Un consultorio versátil para distintas consultas y especialidades.",
    image: multiImg,
  },
];

const steps = [
  {
    title: "Pedís tu turno",
    text: "Elegís la especialidad y el horario que más te acomoda. En minutos, sin vueltas.",
  },
  {
    title: "Te recibimos",
    text: "Llegás al consultorio y te recibimos en un espacio pensado para que te sientas tranquilo.",
  },
  {
    title: "Atención sin apuro",
    text: "Tu consulta sucede a tu ritmo. Preguntás, escuchás, y salís con un plan claro.",
  },
];

const faqs = [
  {
    q: "¿Cómo reservo un turno?",
    a: "Podés escribirnos por WhatsApp o llamarnos. Te respondemos en el día y coordinamos el horario que mejor te quede.",
  },
  {
    q: "¿Atienden obras sociales?",
    a: "Sí, trabajamos con varias coberturas. Cuando reserves, te confirmamos si tu plan está incluido o las opciones particulares.",
  },
  {
    q: "¿Puedo ir con un acompañante?",
    a: "Por supuesto. Sabemos que a veces venir acompañado hace la diferencia. Hay espacio para que te esperen con comodidad.",
  },
  {
    q: "¿Qué pasa si tengo que cancelar?",
    a: "Avisanos con tiempo y reprogramamos sin problema. Lo importante es que vengas cuando estés listo.",
  },
  {
    q: "¿Las instalaciones son accesibles?",
    a: "Sí. Los consultorios cuentan con accesos adaptados y espacios amplios para que el tránsito sea cómodo para todos.",
  },
];

function Home() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* HERO */}
      <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Espacio de +consultorios con luz natural"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.35),_transparent_60%)]" />

        <div className="container-fluid relative z-10 flex h-full flex-col justify-end pb-20 pt-32 text-primary-foreground">
          <p className="eyebrow !text-primary-foreground/80 animate-fade-up">
            Conglomerado de consultorios médicos
          </p>
          <h1 className="mt-6 animate-fade-up">
            <span className="sr-only">+consultorios</span>
            <img
              src={logoWhite}
              alt=""
              aria-hidden="true"
              width={800}
              height={307}
              className="w-[clamp(16rem,42vw,34rem)] h-auto"
            />
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 animate-fade-up sm:text-xl">
            Un lugar para atenderte con tranquilidad. Donde la consulta empieza
            cuando entrás y termina cuando vos lo decidís.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 animate-fade-up">
            <a href="#especialidades" className="btn-primary !bg-primary-foreground !text-primary hover:!bg-secondary hover:!text-primary-foreground">
              Conocé las especialidades
            </a>
            <a href="#contacto" className="btn-ghost">
              Reservar un turno
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-[clamp(1.25rem,5vw,5rem)] z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary-foreground/70 sm:flex">
          <span className="h-px w-12 bg-primary-foreground/50" />
          Pacientes primero
        </div>
      </section>

      {/* INTRO */}
      <section className="container-fluid grid gap-12 py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Nuestra forma</p>
        </div>
        <div className="lg:col-span-7">
          <p className="font-display text-3xl leading-[1.25] text-primary sm:text-4xl lg:text-5xl">
            Creemos que atenderse no debería ser apurado, ni frío, ni complicado.
            Diseñamos cada consultorio para que tu visita se sienta como una pausa
            <span className="text-secondary"> bien cuidada</span>.
          </p>
        </div>
      </section>

      {/* HUB DE ESPECIALIDADES */}
      <section id="especialidades" className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* Background image layers */}
        {specialties.map((s, i) => (
          <img
            key={s.slug}
            src={s.image}
            alt=""
            aria-hidden
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              hovered === i ? "opacity-30" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />

        <div className="container-fluid relative z-10 grid gap-16 py-32 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <p className="eyebrow !text-primary-foreground/70">Especialidades</p>
            <h2 className="mt-6 text-5xl !text-primary-foreground lg:text-6xl">
              Elegí cómo querés cuidarte.
            </h2>
            <p className="mt-6 max-w-sm text-primary-foreground/80 leading-relaxed">
              Cada especialidad tiene su espacio propio, pensado para que la
              consulta fluya sin distracciones.
            </p>
          </div>
          <ul className="min-w-0 lg:col-span-8 lg:pl-8">
            {specialties.map((s, i) => (
              <li key={s.slug}>
                <Link
                  to={s.to}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group flex items-baseline justify-between gap-4 border-t border-primary-foreground/15 py-8 transition-colors last:border-b hover:border-primary-foreground/40 sm:gap-6"
                >
                  <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                    <span className="font-display text-base text-secondary tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="font-display text-2xl !text-primary-foreground transition-transform duration-500 group-hover:translate-x-3 min-[400px]:text-3xl sm:text-5xl xl:text-6xl">
                      {s.name}
                    </span>
                  </div>
                  <span className="hidden max-w-xs text-right text-sm text-primary-foreground/70 xl:block">
                    {s.blurb}
                  </span>
                  <span className="hidden font-display text-secondary text-3xl opacity-0 transition-all duration-500 group-hover:opacity-100 sm:inline">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-fluid py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Cómo es la atención</p>
            <h2 className="mt-6 text-[2.1rem] min-[380px]:text-[2.6rem] min-[480px]:text-5xl lg:text-6xl">Tres momentos, sin sobresaltos.</h2>
          </div>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-secondary/40 animate-line-grow lg:block" />
          <ol className="grid gap-16 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={i} className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-display text-xl text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-8 text-3xl">{s.title}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-fluid grid gap-16 py-32 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-6 text-[2.1rem] min-[380px]:text-[2.6rem] min-[480px]:text-5xl lg:text-6xl">Lo que solés preguntarnos.</h2>
          <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
            Y si quedó algo más, escribinos. Nos gusta responder en palabras simples.
          </p>
        </div>
        <ul className="lg:col-span-8">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <li key={i} className="border-t border-border last:border-b">
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-8 py-7 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-xl text-primary sm:text-2xl">
                    {f.q}
                  </span>
                  <span
                    className={`plus-mark text-3xl transition-transform duration-500 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    open ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden max-w-2xl leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* CONTACTO CTA */}
      <section id="contacto" className="container-fluid pb-12">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-5 py-16 text-primary-foreground sm:px-16 sm:py-24 lg:px-24">
          <p className="eyebrow !text-primary-foreground/70">Reservá tu turno</p>
          <h2 className="mt-6 max-w-4xl text-[2.1rem] leading-[1.05] !text-primary-foreground min-[380px]:text-[2.6rem] min-[480px]:text-5xl lg:text-7xl">
            Cuando quieras venir,
            <br />
            <span className="text-secondary">acá estamos.</span>
          </h2>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-3 rounded-full bg-primary-foreground w-full justify-center px-6 py-4 text-center font-medium [overflow-wrap:anywhere] sm:w-auto sm:px-8 text-primary transition-all hover:bg-secondary hover:text-primary-foreground"
            >
              {CONTACT.email} →
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-secondary w-full justify-center px-6 py-4 text-center font-medium [overflow-wrap:anywhere] sm:w-auto sm:px-8 text-white transition-all hover:bg-secondary/85"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 w-full justify-center px-6 py-4 text-center font-medium [overflow-wrap:anywhere] sm:w-auto sm:px-8 text-primary-foreground transition-all hover:bg-primary-foreground/20"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Llamanos {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
