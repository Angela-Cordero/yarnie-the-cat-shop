import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const name = "Angela";

  return (
    <>
      <div className="container">
        <Header />
        <Main name={name} />
        <Footer />
      </div>
    </>
  );
}

export default App;
