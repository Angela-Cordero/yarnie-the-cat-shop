import { Home } from "./Home";
import { Shop } from "./Shop";

import { Routes, Route } from "react-router-dom";

export function Main() {
  return (
    <>
      <main className="Main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Customized" element={<h2>Customized</h2>} />
          <Route path="/product/1" element={<h2>Pro1</h2>} />
          <Route path="/product/2" element={<h2>Pro2</h2>} />
          <Route path="/product/3" element={<h2>Pro3</h2>} />
        </Routes>
      </main>
    </>
  );
}
export default Main;
