import { Link, NavLink, useParams } from "react-router-dom";
import { app } from "../firebase";

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
import { Item } from "./Item";

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
        return <Item key={index} product={product} />;
      })}
    </div>
  );
}

export default Shop;
