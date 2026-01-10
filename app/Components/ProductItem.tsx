import { useNavigate } from "react-router";
import Button from "./Button";
export default function ProductItem({ product }: ProductItemProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 grid grid-cols-4 grid-rows-2 gap-4 my-5 px-10 place-items-center border-b border-black">
      <div className="w-60 h-60 object-contain overflow-hidden row-span-2">
        <img src={product.image} className="object-cover w-full h-full"></img>
      </div>
      <div className="col-span-2 col-start-2">
        <h2 className="text-4xl text-black">{product.title}</h2>
      </div>
      <div className="text-gray-800 col-span-2 col-start-2 justify-end row-start-2">
        <p className="text-2xl">{product.rating.rate}</p>
        <p>({product.rating.count})</p>
        <p>{product.category}</p>
      </div>

      <div className="col-start-4">
        <div className="text-3xl text-black"> ${product.price.toFixed(2)}</div>
      </div>
      <Button
        className="row-start-2"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        Go to product's page
      </Button>
    </div>
  );
}

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

interface ProductItemProps {
  product: Product;
}
