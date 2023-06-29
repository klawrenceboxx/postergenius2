import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  // figure out what this below code does
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div>
        <h1 style={{ margin: "0.5em 0" }}>Shopping Cart</h1>
        <div className="checkout__content">
          <div className="checkout__left">
            {basket.map((item) => (
              <div className="checkout__product">
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
