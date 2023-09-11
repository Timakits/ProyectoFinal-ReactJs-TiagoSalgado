import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

//PAGES
import ItemListContainer from "./pages/Productos/itemListContainer";
import Soporte from "./pages/Soporte/Soporte";
import Contacto from "./pages/Contacto/Contacto";
import Cart from "./pages/Cart/Cart";
import ItemDetailContainer from "./pages/detailPage"
import CheackoutPage from "./pages/checkoutPage";
import { CartProvider } from "./context/cartContext"; 

function App() {
  return (
    <main>
      <Router>
        <CartProvider>
          <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Soporte" element={<Soporte />}/>
          <Route path="/Contacto" element={<Contacto />}/>
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/Category/:CategoryId" element={<ItemListContainer />}/>
          <Route path="/item/:Id" element={<ItemDetailContainer />}/>
          <Route path="/Checkout" element={<CheackoutPage />}/>s
        </Routes>
        </CartProvider>
          <Footer/>
      </Router>
    </main>
  );
}

export default App;
