import logo from "../img/logo.png";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Search, ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

export function Header() {
  const result = useContext(CartContext);

  console.log("💜", result);

  return (
    <header>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="searchSection">
              <input placeholder="Search" />
              <button>
                <Search />
              </button>
            </div>
          }
        />
      </Routes>

      <nav className="nav">
        <NavLink to="/" className="link">
          Home
        </NavLink>

        <NavLink to="/shop" className="link">
          Shop
        </NavLink>

        <NavLink to="/customized" className="link">
          Customized
        </NavLink>

        <NavLink to="/about" className="link">
          About
        </NavLink>
        <NavLink to="yarnie-the-cat-shop/cart">
          <ShoppingBag />
          {result.quantity}
        </NavLink>
      </nav>
    </header>
  );
}
