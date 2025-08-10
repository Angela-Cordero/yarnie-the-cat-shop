import Product from "./Product.jsx";

export function Shop() {
  return (
    <div className="Shop">
      <h1>Welcome to my shop!</h1>
      <p>
        You will find many plushies made with love and feline supervision. Feel
        free to contact us in case you have any question, we will be happy to
        assist.
      </p>
      <div className="products"></div>

      <Product />
    </div>
  );
}
