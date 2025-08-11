import cat from "../img/white-cat.jpg";
import octopus from "../img/octopus.jpg";
import sunflower from "../img/sunflower.jpg";
import turtle from "../img/turtle.jpg";
import { Link, Routes, Route } from "react-router-dom";
import { Circle, Plus } from "lucide-react";
import { app } from "../firebase";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

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

  const handleAddProduct = () => {
    const db = getFirestore(app);

    const productsCollection = collection(db, "products");

    addDoc(productsCollection, {
      id: 5,
      name: "Product 5",
      productTitle: "Dog",
      price: 60,
      productInfo: "This plushie is perfect for dog lovers",
    });
  };

  const handleBringProduct = () => {
    const db = getFirestore(app);

    const productsCollection = collection(db, "products");

    const request = getDocs(productsCollection);

    request
      .then((answer) => {
        console.log("salió todo bien");

        const finalProducts = [];

        answer.docs.forEach((product) => {
          finalProducts.push(product.data());
        });
        console.log(finalProducts);
      })
      .catch(() => {
        console.log("Error 😢");
      });
  };

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
                <h4 className="productPrice">
                  {Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(product.price * 1000)}
                </h4>
                <button onClick={handleAddProduct}>
                  <span className="material-symbols-outlined">
                    <Plus />
                  </span>
                </button>
                <button onClick={handleBringProduct}>
                  <span>
                    <Circle />
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
