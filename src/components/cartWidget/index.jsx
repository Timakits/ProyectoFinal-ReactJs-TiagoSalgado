import React, { useContext } from "react";

import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <i className="fa-solid fa-cart-shopping"></i>
      {cart.length}
    </div>
  );
};

export default CartWidget;
