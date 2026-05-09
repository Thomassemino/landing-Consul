import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/specialty-page";
import img from "@/assets/odontologia.jpg";

export const Route = createFileRoute("/odontologia")({
  head: () => ({
    meta: [
      { title: "Odontología — +consultorios" },
      {
        name: "description",
        content:
          "Dos consultorios odontológicos diseñados para una atención precisa, cuidada y sin apuros.",
      },
      { property: "og:title", content: "Odontología — +consultorios" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <SpecialtyPage
      data={{
        eyebrow: "Especialidad",
        title: "Odontología, con tiempo y precisión.",
        lede: "Te recibimos en consultorios pensados para que la visita al odontólogo deje de sentirse incómoda. Equipamiento moderno, materiales de calidad y un equipo que se toma el tiempo de explicarte cada paso.",
        image: img,
        consultorios: 2,
        experience: [
          "Una primera consulta calmada, donde escuchamos lo que te preocupa antes de revisar.",
          "Un diagnóstico claro, con imágenes y explicaciones en palabras simples.",
          "Un plan de tratamiento a tu ritmo, con prioridades acordadas en conjunto.",
        ],
        preparation: [
          "Si tomás medicación habitual, contános cuál.",
          "Llegá unos minutos antes para acomodarte.",
          "Si tenés estudios previos, traélos en mano o por mail.",
          "Vení con la boca limpia, sin necesidad de algo más.",
        ],
        note: "Próximamente vas a poder consultar tu odontograma e historia clínica desde tu propio espacio digital.",
      }}
    />
  ),
});
