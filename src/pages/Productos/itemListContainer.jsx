import React from "react";
import ListProcduct from "../../components/listProduct";
import BannerContainer from "../../components/itemListContainer";
import Cards from "../../components/cards";

const ItemListContainer = () => {
    return (<div>
        <BannerContainer />
        <Cards />
        <ListProcduct />
    </div>);
};

export default ItemListContainer;
