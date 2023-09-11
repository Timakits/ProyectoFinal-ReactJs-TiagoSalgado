import BannerContainer from "../../components/bannerContainer/index";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";

//COMPONENT
import ItemList from "../../components/itemList";

//Json
import Stock from "./Products.json";

//Firebase
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {
  let { CategoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      //firebase call
      const q = query(collection(db, "VisualCheck-Products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);

      //filtrado de productos
      let filterProducts;
      if (!CategoryId) {
        filterProducts = docs;
        setisLoading(true);
      } else {
        filterProducts = docs.filter(
          (element) => element.brand === CategoryId
          );
          setisLoading(true);
        }
        setProducts(filterProducts);
      };
      getProducts();
      
  }, [CategoryId]);



  ;
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
