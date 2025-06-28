import Product from "./Product";

export function Main({ name }) {
  return (
    <main>
      <h1>Welcome, {name}!</h1>
      <p>Plushies made with love... and feline supervision</p>
      <div>
        <Product />
      </div>
    </main>
  );
}
