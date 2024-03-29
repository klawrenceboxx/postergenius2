import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate, useRouteMatch } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  const [{ basket }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // this allows us to programmatically change the url

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate.replace("/Orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(getBasketTotal(basket));

  return (
    <div className="payment">
      <div className="payment__section">
        <div className="payment__items">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="payment__section">
        {/* Stripe magic will go */}

        <form onSubmit={handleSubmit}>
          <CardElement onChange={handleChange} />

          <div className="payment__priceContainer">
            <h3>Order Total: {formattedTotal}</h3>

            <button disabled={processing || disabled || succeeded}>
              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
          </div>

          {/* Errors */}
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Payment;
