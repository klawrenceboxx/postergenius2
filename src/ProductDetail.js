import React from "react";
import ImageGallery from "./ImageGallery";
import koi from "./images/koi.png";
import koi2 from "./images/koi2.png";
import koi3 from "./images/koi3.png";
import koi4 from "./images/koi4.png";
import "./ProductDetail.css";

const images = [
  { id: "1", url: koi },
  { id: "2", url: koi2 },
  { id: "3", url: koi3 },
  { id: "4", url: koi4 },
];

function ProductDetail() {
  return (
    <div className="ProductDetail">
      <section className="hero__Detail">
        <button>All Posters</button>
        <div className="container__Detail">
          <div className="left__Detail">
            <div className="App">
              <ImageGallery images={images} />
              {/* <img src={koi} alt="" /> */}
            </div>
          </div>
          <div className="right__Detail">
            <h1>Title</h1>
            <h3>Orientation</h3>
            <h3>Size</h3>
            <button>12x18 inches</button>
            <button>18x24 inches</button>
            <button>24x36 inches</button>
            <h3>Material</h3>
            <h3>Framing</h3>
            <button>$49 ADD TO CART</button>
            7-day money back guarantee
          </div>
        </div>
      </section>
      <section className="Features__Detail">
        <h1>Special Features</h1>
        <div className="Features__Detail__container">
          <div className="Features__Detail__container__feature1">
            <p>Item 1 description</p>
          </div>
          <div className="Features__Detail__container__feature2">
            <p>Item 1 description</p>
          </div>
          <div className="Features__Detail__container__feature3">
            <p>Item 1 description</p>
          </div>
          <div className="Features__Detail__container__feature4">
            <p>Item 1 description</p>
          </div>
        </div>
      </section>
      <section className="FAQ__Detail"></section>
      <section className="Promotion__Detail"></section>
      <section className="Suggested__Detail"></section>
    </div>
  );
}

export default ProductDetail;
