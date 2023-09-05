import React, { useState } from "react";
import "./styles.css";

//MUI
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

//CMPS
import CardCart from "../../components/cardCart";

const Cart = () => {
  

  return (
    <>
    <div className="cartContainer">
      <div className="listCart">
        <div className="btns">
          <IconButton>
           Vaciar carrito <DeleteIcon />
          </IconButton>
        </div>
        <CardCart/>
      </div>
    </div>
    </>
  );
};

export default Cart;
