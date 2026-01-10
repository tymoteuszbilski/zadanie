import { NavLink, useFetcher } from "react-router";
import type { Route } from "./+types/cart";
import ProductInCart from "~/Components/PoductInCart";
import Message from "~/Components/Message";
import Button from "~/Components/Button";
import { fetchAllProducts } from "~/services/fetchFunctions";
import {
  changeProductQuantity,
  getCartProductIds,
  sumAllItemsInCart,
  sumAllPrices,
} from "~/services/functions";
export default function Cart({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const cartTotalPrice = Number(localStorage.getItem("fullPrice")).toFixed(2);

  if (loaderData.error) {
    return <Message message={loaderData.error} />;
  }

  return (
    <>
      <div className="bg-gray-100 grid lg:grid-cols-6 gap-4 sm:grid-cols-1 gap-4">
        <NavLink to="/products" className="flex flex-col  gap-2 text-xl">
          <Button>Go to product list</Button>
        </NavLink>
        <div className="col-span-4">
          {loaderData.cart.map((product: Product) => {
            const productId = product.id.toString();
            const productQuantity = localStorage.getItem(`${product.id}`);
            const productTotalPrice = (
              Number(productQuantity) * product.price
            ).toFixed(2);
            return (
              <>
                {" "}
                <ProductInCart key={product.id} product={product}>
                  <div className="grid grid-rows-2 place-items-center">
                    <fetcher.Form method="post" className="grid grid-cols-3">
                      <Button
                        onClick={() =>
                          changeProductQuantity("minus", productId)
                        }
                      >
                        -
                      </Button>
                      <p className="p-3 ">{productQuantity}</p>
                      <Button
                        onClick={() => {
                          changeProductQuantity("plus", productId);
                        }}
                      >
                        +
                      </Button>
                    </fetcher.Form>
                    <div className="flex justify-end text-xl">
                      ${productTotalPrice}
                    </div>
                  </div>
                </ProductInCart>
              </>
            );
          })}
          <p className="text-4xl">Total: ${cartTotalPrice}</p>
        </div>
        <div></div>
      </div>
    </>
  );
}

export async function clientLoader(_: Route.LoaderArgs) {
  try {
    const allProducts = await fetchAllProducts();
    const productIds = getCartProductIds();

    const cart = allProducts.filter((p) => productIds.includes(p.id));

    sumAllItemsInCart(productIds);
    sumAllPrices(cart);

    return { cart, error: null };
  } catch {
    return { cart: [], error: "Failed to load cart" };
  }
}

export async function clientAction({ request }: Route.ActionArgs) {
  await fetch(`https://fakestoreapi.com/products`);
}
