import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/specialty-page";
import img from "@/assets/multiespacio.jpg";

export const Route = createFileRoute("/multiespacio")({
  head: () => ({
    meta: [
      { title: "Multiespacio — +consultorios" },
      {
        name: "description",
        content:
          "Un consultorio versátil que recibe distintas especialidades, siempre con la misma calidez y prolijidad.",
      },
      { property: "og:title", content: "Multiespacio — +consultorios" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <SpecialtyPage
      data={{
        eyebrow: "Espacio",
        title: "Un consultorio que se adapta a vos.",
        lede: "Un consultorio multiespacio para distintas consultas y especialidades complementarias. La misma atención cuidada, en un entorno preparado para lo que necesites.",
        image: img,
        consultorios: 1,
        experience: [
          "Un espacio neutro y luminoso, con todo lo necesario para una consulta cómoda.",
          "Distintas especialidades pasan por acá, siempre bajo el mismo estándar de cuidado.",
          "Una atención que respeta tu tiempo y tu privacidad.",
        ],
        preparation: [
          "Confirmá la especialidad al reservar tu turno.",
          "Traé documentación relacionada si la consulta lo amerita.",
          "Si necesitás algo puntual del espacio, avisanos.",
          "Vení con tiempo y sin apuros.",
        ],
      }}
    />
  ),
});
