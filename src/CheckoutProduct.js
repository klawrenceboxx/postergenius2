import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p>{title}</p>
        <p>${price} CAD</p>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
