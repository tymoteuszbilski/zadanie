import { redirect, useFetcher } from "react-router";
import type { Route } from "./+types/product";
import ProductC from "~/Components/ProductC";
import ErrorMessage from "~/Components/Message";
import Button from "~/Components/Button";
import { addToCart } from "~/services/functions";
import { fetchProductById } from "~/services/fetchFunctions";
export default function Product({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();

  if (loaderData.error) {
    return <ErrorMessage message={loaderData.error} />;
  }
  return (
    <>
      <ProductC product={loaderData.product}>
        {
          <fetcher.Form method="put">
            <Button type="submit">Add to cart</Button>
          </fetcher.Form>
        }
      </ProductC>
    </>
  );
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  try {
    const product = await fetchProductById(params.productId!);
    return { product, error: null };
  } catch (err) {
    return { product: null, error: "Failed to fetch data" };
  }
}

export async function clientAction({ params }: Route.ClientActionArgs) {
  try {
    addToCart(params.productId!);
    return redirect("/cart");
  } catch (err) {
    console.log(err);
  }
}
