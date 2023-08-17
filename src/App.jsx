import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

//PAGES
import Productos from "./pages/Productos/Productos";
import Soporte from "./pages/Soporte/Soporte";
import Contacto from "./pages/Contacto/Contacto";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/home";
import CategoryPage from "./pages/categoryPage";
import DetailPage from "./pages/detailPage";

function App() {
  return (
    <main>
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Productos />}/>
          <Route path="/Soporte" element={<Soporte />}/>
          <Route path="/Contacto" element={<Contacto />}/>
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/Productos/:brandCategory" element={<CategoryPage />}/>
          <Route path="/Productos/Detail/:id" element={<DetailPage />}/>

        </Routes>
          <Footer/>
      </Router>
    </main>
  );
}

export default App;
