import { Home } from "./Home";
import { Shop } from "./Shop";
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from "./Cart";
import { ItemDetail } from "./ItemDetail";

export function Main() {
  return (
    <>
      <main className="Main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="yarnie-the-cat-shop/shop/:category" element={<Shop />} />
          <Route path="/customized" element={<h2>Customized</h2>} />
          <Route path="/product/:id" element={<ItemDetail />} />
          <Route path="yarnie-the-cat-shop/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}
