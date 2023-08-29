import BannerContainer from "../../components/itemListContainer";
import React, { useEffect, useState } from "react";
import "./styles.css"
import { useParams } from "react-router-dom";

//COMPONENT
import ItemList from "../../components/itemList";


//Json
import Stock from "./Products.json"

const ItemListContainer = () => {
    let {CategoryId} = useParams();
    const [products, setProducts] = useState([])
    
    
    
    useEffect( () => {
        setTimeout( () => {
            let filterProducts 
            if(!CategoryId) {
                filterProducts = Stock
            }else{
                filterProducts = Stock.filter( (element) => element.brand === CategoryId)
            }
            setProducts(filterProducts)
        }, 1000)
    }, []);



    return (
    <div id="ver-mas-link" className="card-product">
        { !CategoryId && <BannerContainer />}
        <ItemList products= {products}/>
    </div> )
    
};

export default ItemListContainer;
