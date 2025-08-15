import { useParams } from "react-router-dom";
import { Plus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../providers/CartProvider";
import { collection, getDoc, getFirestore, doc } from "firebase/firestore";
import { app } from "../firebase";

export function ItemDetail() {
  const [product, setProduct] = useState({});
  const result = useParams();

  useEffect(() => {
    handleBringDetail();
  }, []);

  const handleBringDetail = () => {
    const db = getFirestore(app);
    const productsCollection = collection(db, "products");
    const filter = doc(productsCollection, result.id);
    const request = getDoc(filter);

    request
      .then((answer) => {
        setProduct(answer.data());
      })
      .catch(() => {
        console.log("error al traer detalle");
      });
  };
  const resultado = useParams();
  // const coresult2 = useContext(CartContext);

  const handleClick = () => {
    result2.setQuantity(2);
  };

  return (
    <div className="productDetail">
      <h3>{product.productTitle}</h3>
      <h2>Product Details</h2>
      <h4 className="productPrice">
        {Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(product.price * 1000)}
      </h4>
      <p>{product.productInfo}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat, id
        cumque dicta quia error vel dolores autem quis blanditiis eligendi nulla
        sed repellendus natus. Odit ipsa perferendis neque at. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Nobis architecto placeat quos
        ea, et rerum unde fugit temporibus velit qui!
      </p>
      <button onClick={handleClick}>
        <Plus />
        Add to cart
      </button>
    </div>
  );
}
