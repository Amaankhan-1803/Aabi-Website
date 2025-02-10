import React, {useState} from 'react'
import '../assets/collection.css'
import '../assets/mobcollection.css'
import products from '../assets/products.json'

import p1 from "/imgs/p1.png";
import p2 from "/imgs/p2.png";
import p3 from "/imgs/p3.png";
import p4 from "/imgs/p4.png";
import p5 from "/imgs/p5.png";
import p6 from "/imgs/p6.png";
import p7 from "/imgs/p7.png";
import p8 from "/imgs/p8.png";
import p9 from "/imgs/p9.png";

const images = {
  "p1.png": p1,
  "p2.png": p2,
  "p3.png": p3,
  "p4.png": p4,
  "p5.png": p5,
  "p6.png": p6,
  "p7.png": p7,
  "p8.png": p8,
  "p9.png": p9,
};

const Collection = () => {

    const [visibleProducts, setVisibleProducts] = useState(3);

    const handleViewMore = () => {
        if (visibleProducts >= products.length) {
          // Open Instagram link in a new tab when all products are shown
          window.open("https://www.instagram.com/abu_nidhal_jewellry1?igsh=MXA5MXdhYW94amZpNg==", "_blank");
        } else {
          setVisibleProducts((prevCount) => prevCount + 3);
        }
      };

  return (
    <div>
        <h2 className="text-center">Our Collection</h2>

        <div className="container py-md-5">
        <div className="row">
        {products.slice(0, visibleProducts).map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img
                src={images[product.image]}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body py-2">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text"><strong>{product.price}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div className="text-center mt-md-4">
        <button
          className="btn"
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>
        </div>
    </div>
  )
}

export default Collection
