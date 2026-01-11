import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("landing/:productId", "routes/landing.tsx"),
  route("products", "routes/products.tsx"),
  route("product/:productId", "routes/product.tsx"),
  route("cart", "routes/cart.tsx"),
  route("*", "routes/notFound.tsx"),
] satisfies RouteConfig;
