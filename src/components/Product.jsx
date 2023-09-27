import React from "react";
import productDescription from '../assets/images/product-description.svg'
import verified from '../assets/images/verified.svg'
import cogWheel from '../assets/images/cogwheel.svg'

const Product = () => {
  return (
    <section className="container service">
      <h3>Product and Service</h3>
        <div className="threeRow">
            <div className="serviceBox rowLeft">
              <div className="iconHolder">
                <img src={productDescription} alt="" />
              </div>
              <h2>Our Product</h2>
              <p>
                Our product is made on the base of our team's careful research
                and analyses, ranging from internet based application.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className="serviceBox rowMiddle">
              <div className="iconHolder">
              <img src={verified} alt="" />
              </div>
              <h2>Our Service</h2>
              <p>
                DSI's shared service solutions focus on the front-end based
                software development, designed specifically for the banking and
                financial sectors.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className="serviceBox rowRight">
              <div className="iconHolder">
              <img src={cogWheel} alt="" />
              </div>
              <h2>Our Technology</h2>
              <p>
                First JAVA, runs on more than 850 million personal computers
                worldwide, and on billions of devices worldwide, including
                mobile and TV devices.
              </p>
              <a href="#">Read More</a>
            </div>
        </div>
    </section>
  );
};

export default Product;
