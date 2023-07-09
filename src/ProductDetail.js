import React from "react";
import ImageGallery from "./ImageGallery";
import koi from "./images/koi.png";
import koi2 from "./images/koi2.png";
import koi3 from "./images/koi3.png";
import koi4 from "./images/koi4.png";

const images = [
  { id: "1", url: koi },
  { id: "2", url: koi2 },
  { id: "3", url: koi3 },
  { id: "4", url: koi4 },
];

function ProductDetail() {
  return (
    <div className="App">
      <ImageGallery images={images} />
      {/* <img src={koi} alt="" /> */}
    </div>
  );
}

export default ProductDetail;
