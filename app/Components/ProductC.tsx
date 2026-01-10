export default function producsInCart({ product, children }: ProductItemProps) {
  return (
    <>
      <div className="bg-gray-100 grid grid-cols-4  gap-4 my-5 px-10 place-items-center border-b border-black">
        <div className="w-80  object-contain overflow-hidden">
          <img src={product.image} className="object-cover w-full h-full"></img>
        </div>
        <div className="col-span-2 col-start-2">
          <h2 className="text-4xl text-black my-7">{product.title}</h2>
          <p className="text-2xl">{product.rating.rate}</p>
          <p>({product.rating.count})</p>
          <p className="text-right">{product.category}</p>
          <p className="">{product.description}</p>
        </div>{" "}
        <div className="col-start-4">
          <div className="text-3xl text-black ">
            {" "}
            ${product.price.toFixed(2)}
          </div>
          <div className="text-xl">{children}</div>
        </div>
      </div>
    </>
  );
}

interface ProductItemProps {
  product: Product;
  children: React.ReactNode;
}
