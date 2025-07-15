import cat from "../img/white-cat.jpg";
import octopus from "../img/octopus.jpg";
import sunflower from "../img/sunflower.jpg";
import turtle from "../img/turtle.jpg";
import { Link, Routes, Route } from "react-router-dom";

export function Product(props) {
  const products = [
    {
      id: 1,
      name: "Product 1",
      productTitle: "Turtle",
      price: 25,
      img: turtle,
      productInfo: "Dimensions are perfect for a cute keychain or purse charm",
    },
    {
      id: 2,
      name: "Product 2",
      productTitle: "Octopus",
      price: 25,
      img: octopus,
      productInfo: "Made with high quality yarn. It is super soft",
    },
    {
      id: 3,
      name: "Product 3",
      productTitle: "Sunflower",
      price: 20,
      img: sunflower,
      productInfo: "This keychain is perfect for somebody who loves flowers.",
    },
    {
      id: 4,
      name: "Product 4",
      productTitle: "Cat",
      price: 22,
      img: cat,
      productInfo: "This plushie is perfect for cat lovers",
    },
  ];

  return (
    <div className="catalog">
      {products.map((product, index) => {
        return (
          <div key={index}>
            <div className="product">
              <img
                src={product.img}
                alt={`${product.productTitle}Plushie`}
                className="productImg"
              ></img>
              <h3>{product.productTitle}</h3>
              <div className="productBuy">
                <h4 className="productPrice">${product.price}</h4>
                <button>
                  <span className="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <p className="productInfo">{product.productInfo}</p>
              <Link to={`/product/${product.id}`}>See more</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
