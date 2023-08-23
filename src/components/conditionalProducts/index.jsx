import React from 'react'
import CategoryPage from '../../pages/categoryPage'
import ListProcduct from '../listProduct'
import { useParams } from 'react-router-dom'




const ConditionalProduct = () => {
    const {CategoryId} = useParams()
if(!CategoryId){
    return <ListProcduct/>
}else{
    <CategoryPage/>
    console.log("no funca")
}
}

export default ConditionalProduct