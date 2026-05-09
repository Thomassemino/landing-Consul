import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/specialty-page";
import img from "@/assets/medicina-general.jpg";

export const Route = createFileRoute("/medicina-general")({
  head: () => ({
    meta: [
      { title: "Medicina general — +consultorios" },
      {
        name: "description",
        content:
          "Una mirada integral para tu salud. Consultas, controles y orientación con tiempo para cada paciente.",
      },
      { property: "og:title", content: "Medicina general — +consultorios" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <SpecialtyPage
      data={{
        eyebrow: "Especialidad",
        title: "Medicina general, mirada integral.",
        lede: "Un consultorio para tus controles, consultas y dudas cotidianas. Pensamos la atención como un acompañamiento, no como una visita rápida.",
        image: img,
        consultorios: 1,
        experience: [
          "Una conversación abierta donde se escucha más de lo que se receta.",
          "Una revisión clínica con tiempo, sin sentirte un número.",
          "Una orientación clara: qué hacer, cuándo volver y a quién derivarte si hace falta.",
        ],
        preparation: [
          "Traé estudios o análisis recientes si los tenés.",
          "Anotá tus medicamentos habituales y dosis.",
          "Si querés, vení acompañado.",
          "Llegá con tiempo para registrarte sin apuro.",
        ],
      }}
    />
  ),
});
