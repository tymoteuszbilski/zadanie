import { useFetcher } from "react-router";
import type { Route } from "./+types/products";
import ProductItem from "~/Components/ProductItem";
import ErrorMessage from "~/Components/Message";
import SidePanel from "~/Components/SidePanel";
import { fetchAllProducts } from "~/services/fetchFunctions";

export default function Products({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const products = fetcher.data?.products ?? loaderData.products;
  if (loaderData.error) {
    return <ErrorMessage message={loaderData.error} />;
  }
  return (
    <div className="bg-gray-100 grid gap-4 lg:grid-cols-6 gap-4 sm:grid-cols-1">
      <div className="">
        <fetcher.Form method="post">
          <SidePanel></SidePanel>
        </fetcher.Form>
      </div>
      <div className="col-span-4">
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className=""></div>
    </div>
  );
}

export async function clientLoader() {
  try {
    const products = await fetchAllProducts();
    return { products, error: null };
  } catch (err) {
    return { products: [], error: "Failed to fetch data" };
  }
}
export async function clientAction({ request }: Route.ActionArgs) {
  try {
    const products = await fetchAllProducts();
    const formData = await request.formData();
    const sortType = formData.get("sort");
    switch (sortType) {
      case "name": {
        products.sort((a: Product, b: Product) =>
          a.title.localeCompare(b.title)
        );
        break;
      }
      case "price": {
        products.sort((a: Product, b: Product) => a.price - b.price);
        break;
      }
      default:
        break;
    }
    return { products, error: null };
  } catch (err) {
    return { products: [], error: "Failed to fetch data" };
  }
}
