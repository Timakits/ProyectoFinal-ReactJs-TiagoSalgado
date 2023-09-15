import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../cardProduct";
import "./styles.css";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="card-container">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/item/${product.id}`} className="Deatil-link">
                {product ? <CardProduct data={product} /> : <p>Cargando...</p>}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
