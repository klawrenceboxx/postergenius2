import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import ProductDetail from "./ProductDetail";

const promise = loadStripe(
  "pk_test_51N5z6KKWLTAcuCBtS9mA00hfM9jURZnEwCw6lhqrrXrayh1SogeNQUek4vzgIbyIGv6I2C2DL7ZxbIshY5h1kTZd00UJtbwvNO"
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route
            path="/detail"
            element={
              <>
                <ProductDetail />
              </>
            }
          />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
