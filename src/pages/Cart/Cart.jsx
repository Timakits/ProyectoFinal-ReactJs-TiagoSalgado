import React, { useState } from "react";
import "./styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
//MUI
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

//CMPS
import CardCart from "../../components/cardCart";

//CONTEXT
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { clearCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const { total } = useContext(CartContext);

  return (
    <>
      <div className="cartContainer">
        <div className="btns">
          <IconButton>
            <h3 onClick={clearCart}>
              Vaciar carrito <DeleteIcon />
            </h3>
          </IconButton>
        </div>
        <div className="listCart">
          {!cart.length == 0 ? (
            <CardCart />
          ) : (
            <>
              <p className="cartAlert">No hay productos en el carrito... </p>
              <Link to="/">
                <button className="linkbutton">Ver productos</button>
              </Link>
            </>
          )}
        </div>
        {!cart.length == 0 ? (
          <>
          <div className="total">Total en el carrito: ${total()}</div>
          <div className="btnCheack"><Link to='/Checkout'>Checkout</Link></div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
