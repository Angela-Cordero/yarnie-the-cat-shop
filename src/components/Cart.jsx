import { useState } from "react";
import { CheckoutForm } from "./CheckoutForm";

export function Cart() {
  const [data, setData] = useState("Sin Data recibida");

  const handleSendForm = (data) => {
    setData(data);
  };

  return (
    <div>
      <h2>Your shopping cart</h2>
      <p>{data}</p>
      <CheckoutForm onSendForm={handleSendForm} />
    </div>
  );
}
