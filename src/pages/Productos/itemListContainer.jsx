import React, { useState } from "react";
import ListProcduct from "../../components/listProduct";
import BannerContainer from "../../components/itemListContainer";
import Cards from "../../components/cards";


const ItemListContainer = () => {
    const [showBannerAndCards, setShowBannerAndCards] = useState(true);

    const ConditionChange = (condition) => {
        setShowBannerAndCards(condition);
    };

    return (
        <div>
            {showBannerAndCards && (
                <>
                    <BannerContainer />
                    <Cards />
                </>
            )}
            <ListProcduct onConditionChange={ConditionChange} />
        </div>
    );
};

export default ItemListContainer;
