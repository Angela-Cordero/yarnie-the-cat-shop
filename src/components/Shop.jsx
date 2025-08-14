import { Link, NavLink, useParams } from "react-router-dom";
import { app } from "../firebase";
import { Plus } from "lucide-react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export function Shop() {
  const [products, setProducts] = useState([]);
  const result = useParams();
  console.log("🐱", result);

  useEffect(() => {
    if (result.category) {
      handleBringProductsbyCategory();
    } else {
      handleBringProducts();
    }
  }, [result.category]);

  const handleBringProducts = () => {
    const db = getFirestore(app);

    const productsCollection = collection(db, "products");

    const request = getDocs(productsCollection);

    request
      .then((answer) => {
        const finalProducts = [];

        answer.docs.forEach((product) => {
          const finalProduct = {
            id: product.id,
            ...product.data(),
          };

          finalProducts.push(finalProduct);
        });

        setProducts(finalProducts);
      })

      .catch(() => {
        console.log("Not able to bring products😢");
      });
  };

  const handleBringProductsbyCategory = () => {
    console.log("products by category have been brought");
    const db = getFirestore(app);
    const productsCollection = collection(db, "products");

    const filter = query(
      productsCollection,
      where("category", "==", result.category)
    );

    const request = getDocs(filter);
    request
      .then((answer) => {
        const finalProducts = [];

        answer.docs.forEach((product) => {
          const finalProduct = {
            id: product.id,
            ...product.data(),
          };

          finalProducts.push(finalProduct);
        });
        setProducts(finalProducts);
      })
      .catch(() => {
        console.log("error when bringing products");
      });
  };

  return (
    <div className="productContainer">
      {products.map((product, index) => {
        return (
          <article key={index} className="productCard">
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
      })}
    </div>
  );
}

export default Shop;
