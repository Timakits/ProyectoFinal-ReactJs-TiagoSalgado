import axios from "axios";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import "./styles.css"
//COMPONENT
import CardProduct from "../cardProduct";
import Spinner from "../spinner";

//Json
import Stock from "./Products.json"

//https://my.api.mockaroo.com/visual_check.json?key=9c270d50

const ListProcduct = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        setTimeout( () => {
            setProducts(Stock)
        }, 1000)
    }, []);



    return (
    <div className="card-product">
        {products.map((product) => {
            return(
                <div>
                    <CardProduct data={product}/>
                </div>
            )
        })}
    </div> ) ;
}


export default ListProcduct