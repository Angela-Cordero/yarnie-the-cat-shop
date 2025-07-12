import { Link } from "react-router-dom";

export function Home() {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            {product.name}
            <Link to={`/product/${product.id}`}>See more</Link>
          </div>
        );
      })}
    </div>
  );
}
