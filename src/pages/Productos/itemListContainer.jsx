import BannerContainer from "../../components/bannerContainer/index";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";

//COMPONENT
import ItemList from "../../components/itemList";

//Json
import Stock from "./Products.json";

const ItemListContainer = () => {
  let { CategoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    let filterProducts;
    if (!CategoryId) {
      filterProducts = Stock;
    } else {
      filterProducts = Stock.filter((element) => element.brand === CategoryId);
    }
    setProducts(filterProducts);
    setisLoading(true);
  }, [CategoryId]);

  return (
    <div className="productsContainer">
      {!CategoryId && <BannerContainer />}
      <div
        id="ver-mas-link"
        className={!CategoryId ? "card-product" : "category-product"}
      >
        {isLoading ? <ItemList products={products} /> : <p>Cargando...</p>}
      </div>
    </div>
  );
};

export default ItemListContainer;
