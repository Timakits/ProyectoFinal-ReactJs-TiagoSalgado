import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
//COMPONENETS
import CardProduct from "../../components/cardProduct";
import CardDetail from "../../components/cardDetail";

//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  let { Id } = useParams();

  // useEffect(() => {
  //     const selectedProduct = Stock.find(item => item.id == Id);
  //     if (selectedProduct) {
  //         setTimeout(() => {
  //             setProduct(selectedProduct);
  //         }, 1000);
  //     } else {
  //         console.log("Producto no encontrado");
  //     }
  // }, [Id]);

  useEffect(() => {
    const getProduct = async () => {
      //firebase call
      const q = query(collection(db, "VisualCheck-Products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs);

      const selectedProduct = docs.find((item) => item.id == Id);
      if (selectedProduct) {
        setProduct(selectedProduct);
      } else {
        console.log("Producto no encontrado");
      }
    };
    getProduct();
  }, [Id]);

  return (
    <div className="DetailProduct">
      {product ? <CardDetail data={product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
