import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (event) => {
    event.preventDefault(); // Prevent navigation

    // adding these params into an item and dispatching it to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  // taking the props that was passed into this component and rendering them out to the screen
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
