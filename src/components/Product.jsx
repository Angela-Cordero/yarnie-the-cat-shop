import turtle from "../img/turtle.jpg";

function Product() {
  return (
    <div className="product">
      <img src={turtle} alt="turtle plushie" className="productImg"></img>

      <h3>Turtle</h3>
      <div className="productBuy">
        <h4>$25</h4>
        <button>
          <span class="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
      <p>
        Turtle plushie available in many colors. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis, quisquam.
      </p>
    </div>
  );
}

export default Product;
