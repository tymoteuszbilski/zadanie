import { redirect } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export async function clientLoader({ request }: Route.ClientActionArgs) {
  const randomProductId = Math.floor(Math.random() * 19 + 1);

  return redirect(`/landing/${randomProductId}`);
}
export default function Home() {
  return <></>;
}
