import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <div>
      <Link to="/">
        <h1>Header</h1>
      </Link>
      <Link to="/Checkout">
        <h1>Checkout</h1>
      </Link>
      <Link to="/Payment">
        <h1>Payment</h1>
      </Link>
    </div>
  );
}

export default header;
