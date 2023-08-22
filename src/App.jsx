import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

//PAGES
import ItemListContainer from "./pages/Productos/itemListContainer";
import Soporte from "./pages/Soporte/Soporte";
import Contacto from "./pages/Contacto/Contacto";
import Cart from "./pages/Cart/Cart";
import CategoryPage from "./pages/categoryPage";
import ItemDetailContainer from "./pages/detailPage"

function App() {
  return (
    <main>
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Soporte" element={<Soporte />}/>
          <Route path="/Contacto" element={<Contacto />}/>
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/Category/:CategoryId" element={<CategoryPage />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>

        </Routes>
          <Footer/>
      </Router>
    </main>
  );
}

export default App;
