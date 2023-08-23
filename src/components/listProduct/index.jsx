import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//COMPONENT
import CardProduct from "../cardProduct";
import BannerContainer from "../itemListContainer";
import Cards from "../cards";


//Json
import Stock from "./Products.json"

//https://my.api.mockaroo.com/visual_check.json?key=9c270d50
const ListProcduct = ({ onConditionChange }) => {
    let {CategoryId} = useParams();
    
    if(!CategoryId){
    const [products, setProducts] = useState([])
    
    useEffect( () => {
        setTimeout( () => {
            setProducts(Stock)
        }, 1000)
    }, [products]);

    onConditionChange(true)

    return (
    <div className="card-product">
        {products.map((product) => {
            return(
                <div key={product.id}>
                    <Link to={`/item/${product.id}`} className="Deatil-link">
                        {product ? <CardProduct data={product}/> : <p>Cargando...</p>}
                    </Link>
                </div>
            )
        })}
    </div> )
    
    }else{

    const [products, setProducts] = useState([]);


    
    let filteredBrand = products.filter( (marca) => {
        return marca.brand === CategoryId
    })
    useEffect( () => {
        setTimeout( () => {
            setProducts(Stock)
        }, 1000)
    }, []);
    
    onConditionChange(false)
    
    return (
        <div className='card-product-category'>
            {filteredBrand.map( (marca) => {
                return(
                    <>
                    <div key={marca.id}>
                        <CardProduct data = {marca}/>
                    </div>
                    </>
                )
            })}
        </div>
    )
    } ;
}


export default ListProcduct