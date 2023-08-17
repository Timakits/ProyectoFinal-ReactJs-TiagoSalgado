import React from 'react'
//  COMPONENTS
import Navbar from '../../components/Navbar'
import BannerContainer from '../../components/itemListContainer'
import Cards from '../../components/cards'
import Footer from '../../components/footer'
import axios from 'axios'



const Home = () => {

return (
    <div>
        <BannerContainer />
        <Cards />
    </div>
)
}

export default Home