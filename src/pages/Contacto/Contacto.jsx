import React from "react";
import "./styles.css"
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
const Contacto = () => {
  return (
    <>
      <div className="contacto-container">
        <h2 id="Contacto">Contáctanos</h2>
        <p>Estamos emocionados de poder ayudarte en lo que necesites. Tu opinión es valiosa para nosotros y queremos asegurarnos de que tengas una experiencia excepcional con nuestros productos y servicios. No dudes en ponerte en contacto con nosotros si tienes alguna pregunta, comentario o inquietud.</p>
        <h2>Información de Contacto</h2>
        <ul>
            <li><strong>Dirección:</strong> Av.siempreviva 78</li>
            <li><strong>Teléfono:</strong>  11-7805-8970</li>
            <li><strong>Correo Electrónico:</strong>  visualcheck@gmail.com</li>
            <li><strong>Horario de Atención al Cliente:</strong>  12:00 a 21:00</li>
        </ul>
        <h2>Redes Sociales</h2>
        <p>Síguenos en nuestras redes sociales para mantenerte al día con las últimas novedades, promociones y noticias relacionadas con lentes y accesorios. ¡No te pierdas nuestras publicaciones y mantente conectado con la comunidad de amantes de los lentes!</p>
        <ul>
            <li><strong>Facebook:</strong> [Enlace a la Página de Facebook]</li>
            <li><strong>Instagram:</strong> [Enlace a la Página de Facebook]</li>
            <li><strong>Twitter:</strong> [Enlace a la Página de Facebook]</li>

        </ul>
        <h2>Centro de Atención al Cliente</h2>
        <p>Nuestro equipo de atención al cliente está aquí para ayudarte en cada paso del camino. Si tienes alguna pregunta sobre nuestros productos, pedidos, devoluciones o cualquier otra cosa, no dudes en ponerte en contacto con nosotros. Estamos comprometidos en brindarte un servicio excepcional y responderemos a tus consultas con prontitud.</p>
        <h4>En <strong>Visual Check✔️</strong>, valoramos tu opinión y estamos aquí para asegurarnos de que tengas la mejor experiencia posible. No dudes en comunicarte con nosotros en cualquier momento. ¡Esperamos saber de ti pronto!</h4>
      </div>
    </>
  );
};

export default Contacto;
