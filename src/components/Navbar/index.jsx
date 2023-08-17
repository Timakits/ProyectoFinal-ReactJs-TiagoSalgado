import "./styles.css";
import Logoimg from "./logo";

import { Link } from "react-router-dom";
var num = 3;



function Navbar() {
    return (<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Logoimg />
            <Link to="/" style={{ textDecoration: 'none' }}><a class="navbar-brand" href="#">Visual Check✔️</a></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                        
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        
                        <ul class="dropdown-menu">
                            <Link to="/Productos" style={{ textDecoration: 'none' }}><li className="category">Todos</li></Link>
                            <Link to="/Productos/Ray-Ban" style={{ textDecoration: 'none' }}><li>Ray-Ban</li></Link>
                            <Link to="/Productos/Oakley" style={{ textDecoration: 'none' }}><li>Oakley</li></Link>
                            <Link to="/Productos/Gucci" style={{ textDecoration: 'none' }}><li>Gucci</li></Link>
                            <Link to="/Productos/Prada" style={{ textDecoration: 'none' }}><li>Prada</li></Link>
                            <Link to="/Productos/Versace" style={{ textDecoration: 'none' }}><li>Versace</li></Link>
                        </ul>
                    </li>
                    <Link to="/Soporte" style={{ textDecoration: 'none' }}>
                        <li class="nav-item">
                            Soporte
                        </li>
                    </Link>
                    <Link to="/Contacto" style={{ textDecoration: 'none' }}>
                        <li class="nav-item">
                            Contacto
                        </li>
                    </Link>
                    <Link to="/Cart" style={{ textDecoration: 'none' }}>
                        <li class="nav-item">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </nav>);
}



export default Navbar
