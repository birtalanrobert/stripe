import React, { useContext } from "react";
import { isInCart } from "../../helpers";
import "./featured-product.styles.scss";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/call-context";

const FeaturedProduct = (props) => {
  const { id, title, imageUrl, price, description } = props;
  const product = { title, imageUrl, price, id, description };
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const navigate = useNavigate();
  const iteminCart = isInCart(product, cartItems);

  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => navigate(`/product/${id}`)}
      >
        <img src={imageUrl} alt="product" />
      </div>
      <div className="nname-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        {!iteminCart && (
          <button
            className="button is-black nomad-btn"
            onClick={() => addProduct(product)}
          >
            ADD TO CART
          </button>
        )}
        {iteminCart && (
          <button
            className="button is-white nomad-btn"
            id="btn-white-outline"
            onClick={() => increase(product)}
          >
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
