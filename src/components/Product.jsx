function Product(props) {
  return (
    <div className="product">
      <img src={props.img} alt="turtle plushie" className="productImg"></img>

      <h3 className="productTitle">{props.title}</h3>
      <div className="productBuy">
        <h4 className="productPrice">${props.price}</h4>
        <button>
          <span class="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
      <p className="productInfo">
        Plushie available in many colors. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis, quisquam.
      </p>
    </div>
  );
}

export default Product;
