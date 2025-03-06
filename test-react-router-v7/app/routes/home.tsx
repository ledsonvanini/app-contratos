import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contratos Sesp | FSP" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <h3>Sem componentes...</h3>;
}
