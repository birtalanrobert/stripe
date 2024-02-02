import React from "react";
import './featured-product.styles.scss';
import { useNavigation } from "react-router-dom";

const FeaturedProduct = (product) => {
  const { id, title, imageUrl, price } = product;
  const navigation = useNavigation();

  return (
    <div className="featured-product">
      <div className="featured-image" onClick={() => navigation(`/product/${id}`)}>
        <img src={imageUrl} alt="product" />
      </div>
      <div className="nname-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className="button is-black nomad-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
