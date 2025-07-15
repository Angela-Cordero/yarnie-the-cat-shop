import { Home } from "./Home";
import { Shop } from "./Shop";
import { Product } from "./Product";

import { Routes, Route, Link } from "react-router-dom";

export function Main() {
  return (
    <>
      <main className="Main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<h2>About</h2>} />
          <Route
            path="/shop"
            element={
              <Shop>
                {" "}
                <Product />
              </Shop>
            }
          />
          <Route path="/customized" element={<h2>Customized</h2>} />
          <Route path="/product/:id" element={<h2>Details on Product </h2>} />
        </Routes>
      </main>
    </>
  );
}
