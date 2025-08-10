import { Home } from "./Home";
import { Shop } from "./Shop";
import { Product } from "./Product";

import { Routes, Route, Link } from "react-router-dom";
import { Cart } from "./Cart";
import { ProductDetail } from "./ProductDetail";

export function Main() {
  return (
    <>
      <main className="Main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/customized" element={<h2>Customized</h2>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="yarnie-the-cat-shop/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}
