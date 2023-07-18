import "./styles.css";
import Logoimg from "./logo";

var num = 3;

function Navbar() {
    return (<nav className="navbar">
        <div className="logo">
            <Logoimg />
            <h1 className="title">Visual Check <strong className="check">✔</strong> </h1>
        </div>
        <div className="buttons">
            <a href="#" className="links">Productos</a>
            <a href="#" className="links">Contacto</a>
            <a href="#" className="links">Soporte</a>
            <a href="#" className="links"><img src="" alt="" /><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    </nav>);
}

export default Navbar
