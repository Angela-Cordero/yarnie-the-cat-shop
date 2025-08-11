// import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

import "./firebase";

function App() {
  const name = "Angela";

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Main name={name} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
