import type { Route } from "./+types/landing";
import ProductItem from "~/Components/ProductItem";
export async function clientLoader({ params }: Route.LoaderArgs) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  return await res.json();
}
export default function Landing({ loaderData }: Route.ComponentProps) {
  return (
    <div className="bg-gray-100 grid lg:grid-cols-6 gap-4 sm:grid-cols-1">
      <div></div>
      <div className="col-span-4">
        <div>
          <div className="my-10">
            <h1 className="text-8xl">Welcome to FakeStore</h1>
            <p className="text-4xl">
              Fake products to highlight your fake personality
            </p>
          </div>
          <h2 className="text-3xl">You may like...</h2>
        </div>
        <ProductItem product={loaderData} />{" "}
      </div>
      <div></div>
    </div>
  );
}
