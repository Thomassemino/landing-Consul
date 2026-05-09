import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/specialty-page";
import img from "@/assets/fonoaudiologia.jpg";

export const Route = createFileRoute("/fonoaudiologia")({
  head: () => ({
    meta: [
      { title: "Fonoaudiología — +consultorios" },
      {
        name: "description",
        content:
          "Un consultorio para acompañar tu voz, tu audición y tu comunicación con cercanía y profesionalismo.",
      },
      { property: "og:title", content: "Fonoaudiología — +consultorios" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <SpecialtyPage
      data={{
        eyebrow: "Especialidad",
        title: "Fonoaudiología, escuchada de verdad.",
        lede: "Un espacio dedicado a tu voz, tu audición y tu comunicación. Trabajamos a tu ritmo, sin presiones, con un seguimiento personalizado para cada etapa del proceso.",
        image: img,
        consultorios: 1,
        experience: [
          "Una entrevista inicial donde nos contás cómo te sentís y qué te trajo hasta acá.",
          "Una evaluación tranquila con herramientas adecuadas para tu edad y necesidad.",
          "Un plan acordado, con sesiones que se adaptan a tu vida y a tu progreso.",
        ],
        preparation: [
          "Si tenés estudios audiológicos previos, traélos.",
          "Llegá descansado: la atención requiere concentración.",
          "Si vienen niños, podés acompañarlos sin problema.",
          "Anotá las preguntas que tengas, las respondemos todas.",
        ],
      }}
    />
  ),
});
