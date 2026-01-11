import type { Route } from "./+types/cart";
import Message from "~/Components/Message";

export default function NotFound({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Message message="Error 404">Page not found</Message>
    </>
  );
}
