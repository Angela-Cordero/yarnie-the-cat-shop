import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { Footer } from "./components/Footer";

function App() {
  const name = "Angela";

  return (
    <>
      <div>
        <Header />
        <Shop name={name} />
        <Footer />
      </div>
    </>
  );
}

export default App;
