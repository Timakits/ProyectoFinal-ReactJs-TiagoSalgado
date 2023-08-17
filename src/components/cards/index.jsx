import "./styles.css"
import len1 from "../../assets/img/len1.jpg"
import len2 from "../../assets/img/len2.jpg"
import len3 from "../../assets/img/len3.jpg"
import len4 from "../../assets/img/len4.jpg"
import len5 from "../../assets/img/len5.jpg"
import len6 from "../../assets/img/len6.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

import { Link } from "react-router-dom"

const Cards = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <div className="arrow">
                <i class="fa-solid fa-angles-down"></i>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 cardscontainer">
                <div class="col">
                    <div class="card h-100">
                        <img src={len1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lentes aviador</h5>
                            <p class="card-text">Lentes aviador con vidrio gris oscuro y armazon dorado. Ideal para reuniones elegantes</p>
                            <h6 className="card-link"><a href="#" className="card-link">Ver mas 🕶</a></h6>
                        </div>
                    </div>
                </div>
                <div class="col text" data-aos="fade-up">
                    <h2>¡Bienvenido a nuestra tienda de lentes, donde el estilo y la visión se unen en una experiencia única!</h2>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={len2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lentes aviador</h5>
                            <p class="card-text">Lentes aviador con vidrio rosado y armazon dorado. Perfecto para encuentros casuales</p>
                            <h6 className="card-link"><a href="#" className="card-link">Ver mas 🕶</a></h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={len3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lentes cat eye</h5>
                            <p class="card-text">Lentes con armazon negro ideal para una calida y relajada lectura</p>
                            <h6 className="card-link"><a href="#" className="card-link">Ver mas 🕶</a></h6>
                        </div>
                    </div>
                </div>
                <div className="col text" data-aos="fade-up">
                    <h2>Navegar y comprar en nuestro e -commerce es simple y seguro</h2>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={len4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lentes aviador</h5>
                            <p class="card-text">Lentes aviador con vidrio azulado y armazon plateada. La mejor opcion para poder dar una primera impresion</p>
                            <h6 className="card-link"><a href="#" className="card-link">Ver mas 🕶</a></h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={len5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lentes aviador</h5>
                            <p class="card-text">Lentes aviador con vidrio gris oscuro y armazon negro. Un clasico que nunca falla</p>
                            <h6 className="card-link"><a href="#" className="card-link">Ver mas 🕶</a></h6>
                        </div>
                    </div>
                </div>
                <div className="col text" data-aos="fade-up">
                    <h2>Ofrecemos promociones y descuentos exclusivos</h2>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={len6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lentes XR</h5>
                            <p class="card-text">Vidrio violeta con armazon negro resistente. Preparados para cualquier situacion</p>
                            <h6 className="card-link"><a href="#" className="card-link">Ver mas 🕶</a></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 textContainer">
                        <h1 className="text1"> Desde los estilos clásicos y atemporales hasta las últimas tendencias de moda, tenemos lentes que se ajustan a cada gusto y preferencia.</h1>
                    </div>
                    <div className="col-6 CTACont"><h2 className="text2">!Asi que no dudes en echarle un ojo a nuestros productos¡</h2></div>
                    <div className="col-6 btnContainer">
                        <Link to="/Productos">
                            <button type="button" class="btn btn-outline-secondary productBtn">Productos <i class="fa-solid fa-cart-shopping"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards