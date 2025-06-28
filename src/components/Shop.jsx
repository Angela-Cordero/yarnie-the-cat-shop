import Product from "./Product";
import turtle from "../img/turtle.jpg";
import whiteCat from "../img/white-cat.jpg";
import octopus from "../img/octopus.jpg";
import sunflower from "../img/sunflower.jpg";

export function Shop() {
  return (
    <div className="Shop">
      <h1>Welcome to my shop!</h1>
      <p>
        You will find many plushies made with love and feline supervision. Feel
        free to contact us in case you have any question, we will be happy to
        assist.
      </p>
      <div className="catalog">
        <Product title="Turtle" price={25} img={turtle} />
        <Product title="Cat" price={25} img={whiteCat} />
        <Product title="Octopus" price={25} img={octopus} />
        <Product title="Sunflower" price={16} img={sunflower} />
      </div>
    </div>
  );
}
export default Shop;
