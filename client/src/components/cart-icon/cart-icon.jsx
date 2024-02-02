import React, { useContext } from "react";
import shoppingBag from '../../assets/shopping-bag.png';
import { CartContext } from "../../context/call-context";
import './cart-icon.styles.scss';
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { itemCount } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container" onClick={() => navigate('/cart')}>
      <img src={shoppingBag} alt="shopping-cart-icon" />
      {itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null}
    </div>
  );
};

export default CartIcon;
