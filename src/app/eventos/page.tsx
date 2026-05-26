import { redirect } from "next/navigation";

// La seccion de eventos ya no es parte del portafolio publico de Vento Group.
// Redirigimos al portafolio de restaurantes.
export default function EventosPage() {
  redirect("/restaurantes");
}
