import React from 'react'
import { Link } from 'react-router-dom'
import CardProduct from '../cardProduct'


const ItemList = ({products}) => {
  return (
    <div>
              {products.map((product) => {
            return(
                <div key={product.id}>
                    <Link to={`/item/${product.id}`} className="Deatil-link">
                        {product ? <CardProduct data={product}/> : <p>Cargando...</p>}
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default ItemList