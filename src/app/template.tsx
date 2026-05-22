/**
 * template.tsx se re-monta en cada navegacion (a diferencia de layout.tsx).
 * Eso permite animar la entrada de cada pagina (fundido + leve subida),
 * el efecto "transicion entre paginas" estilo Darling.
 * La animacion se desactiva sola con prefers-reduced-motion (ver globals.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
