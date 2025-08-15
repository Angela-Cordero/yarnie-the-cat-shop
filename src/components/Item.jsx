import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export function Item({ product }) {
  return (
    <article className="productCard">
      <div className="product">
        <img
          src={product.img}
          alt={`${product.productTitle}`}
          className="productImg"
        ></img>
        <h3>{product.productTitle}</h3>
        <div className="productBuy">
          <h4 className="productPrice">
            {Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(product.price * 1000)}
          </h4>
          <button>
            <span className="material-symbols-outlined">
              <Plus />
            </span>
          </button>
        </div>
        <p className="productInfo">{product.productInfo}</p>
        <Link to={`/product/${product.id}`}>See more</Link>
      </div>
    </article>
  );
}
