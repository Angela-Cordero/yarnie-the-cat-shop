import { useParams } from "react-router-dom";
import { Product } from "./Product";
import { Plus } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

export function ProductDetail() {
  const result = useParams();
  const result2 = useContext(CartContext);

  const handleClick = () => {
    result2.setQuantity(2);
  };

  return (
    <div>
      <h2>Product Detail {result.id}</h2>
      <p>$100</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        veritatis ad quaerat distinctio repellat? Velit ad necessitatibus
        dignissimos officiis deleniti.
      </p>
      <button onClick={handleClick}>
        <Plus />
        Add to cart
      </button>
    </div>
  );
}
