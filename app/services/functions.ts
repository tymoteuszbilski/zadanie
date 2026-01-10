// product.tsx
export function addToCart(id: string) {
  const cart: string[] = JSON.parse(localStorage.getItem("product") || "[]");

  if (!cart.includes(id)) {
    localStorage.setItem("product", JSON.stringify([...cart, id]));
    localStorage.setItem(id, "1");
  }
}

// cart.tsx
export function getCartProductIds(): number[] {
  return JSON.parse(localStorage.getItem("product") || "[]").map(Number);
}

export function deleteFromCart(id: string) {
  const cart: string[] = JSON.parse(localStorage.getItem("product") || "[]");
  const updated = cart.filter((p) => p !== id);
  localStorage.setItem("product", JSON.stringify(updated));
  localStorage.removeItem(id);
}

export function changeProductQuantity(op: "plus" | "minus", id: string) {
  const current = Number(localStorage.getItem(id) || 0);
  const next = op === "plus" ? current + 1 : current - 1;

  if (next <= 0) {
    deleteFromCart(id);
  } else {
    localStorage.setItem(id, next.toString());
  }
}

export function sumAllItemsInCart(productIds: number[]) {
  let quantities = productIds.map((id: number) =>
    Number(localStorage.getItem(`${id}`))
  );
  let quantity = 0;
  quantities.forEach((element: number) => {
    quantity += element;
  });
  localStorage.setItem("quantity", `${quantity}`);
}

export function sumAllPrices(cart: Product[]) {
  let productIds = getCartProductIds();
  productIds = productIds.map((i) => Number(i));
  const priceOfSingleItem = productIds.map((id) => {
    const product = cart.find((p) => p.id === id);
    if (!product) return 0;
    const quantity = Number(localStorage.getItem(`${id}`) || 0);
    return product.price * quantity;
  });
  let fullPrice = 0;
  priceOfSingleItem.forEach((element: number) => {
    fullPrice += element;
  });
  localStorage.setItem("fullPrice", `${fullPrice}`);
}
