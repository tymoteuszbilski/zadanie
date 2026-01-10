import { useNavigate } from "react-router";
import Button from "./Button";
export default function ProductItem({ product, children }: ProductItemProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 grid lg:grid-cols-4 sm:grid-cols-1 :sm-grid-rows-4 gap-4 my-5 px-10 place-items-center border-b border-black">
      <div className="w-60 h-60 object-contain overflow-hidden :sm-row-span-2">
        <img src={product.image} className="object-cover w-full h-full"></img>
      </div>
      <div className="lg:col-span-2 lg:col-start-2 :sm-row-start-3">
        <h2 className="text-4xl text-black">{product.title}</h2>
        <Button onClick={() => navigate(`/product/${product.id}`)}>
          Go to product's page
        </Button>
      </div>

      <div className="lg:col-start-4 :sm-row-start-4">
        <div className="text-3xl text-black"> ${product.price.toFixed(2)}</div>
        {children}
      </div>
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
  children: React.ReactNode;
}
