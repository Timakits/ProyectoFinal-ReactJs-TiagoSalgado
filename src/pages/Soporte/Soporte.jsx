import React from "react";

import "./styles.css"
import { Link } from "react-router-dom";

const Soporte = () => {
  return (
    <>
      <div className="soporte-container">
        <h2>Soporte y Servicio al Cliente</h2>
        <p>¡Bienvenido a nuestro centro de soporte y servicio al cliente! Estamos aquí para asegurarnos de que tengas la mejor experiencia posible con nuestros productos y servicios. Si tienes alguna pregunta, inquietud o necesitas asistencia, no dudes en comunicarte con nosotros. Nuestro equipo de soporte está listo para ayudarte en cada paso del camino.</p>
        <h2>Preguntas Frecuentes</h2>
        <p>¿Tienes alguna pregunta común? Consulta nuestras Preguntas Frecuentes para encontrar respuestas rápidas a las dudas más habituales. Hemos recopilado información detallada sobre nuestros productos, políticas de devolución, envíos y más para brindarte la información que necesitas.</p>
        <h2>Contáctanos</h2>
        <p>Si no encuentras la respuesta que buscas en nuestras Preguntas Frecuentes, no dudes en ponerte en <Link to="/Contacto">contacto</Link> con nosotros. Puedes comunicarte con nuestro equipo de soporte a través de varias opciones:</p>
        <ul>
            <li><strong>Chat en Vivo:</strong> Nuestro chat en vivo está disponible durante nuestro horario de atención al cliente. Simplemente haz clic en el ícono de chat en la esquina inferior derecha de la pantalla y estarás conectado con uno de nuestros representantes.</li>
            <li><strong>Correo Electrónico: </strong> Envíanos un correo electrónico a soporte@visualCheck.com y te responderemos en un plazo de 24 horas hábiles.</li>
            <li><strong> Teléfono:</strong> Si prefieres hablar con nosotros por teléfono, puedes llamarnos al <strong>11-7805-8970</strong> de Soporte durante nuestro horario de atención al cliente.</li>
        </ul>
        <h2>Servicio de Garantía</h2>
        <p>Tu satisfacción es nuestra prioridad. Todos nuestros productos cuentan con una garantía de satisfacción del cliente. Si tienes algún problema con tus lentes dentro del período de garantía, estaremos encantados de ayudarte a resolverlo. Simplemente contáctanos y te proporcionaremos las instrucciones para iniciar el proceso de garantía.</p>
        <h2>Política de Devoluciones</h2>
        <p>Si por alguna razón no estás completamente satisfecho con tu compra, ofrecemos una política de devoluciones fácil y sin complicaciones. Puedes devolver tus lentes dentro de los 30 días posteriores a la compra para obtener un reembolso completo o un cambio. Consulta nuestra página de Política de Devoluciones para obtener más detalles sobre cómo iniciar una devolución.</p>

        <h4>En <strong>Visual Check✔️</strong>, estamos comprometidos con brindarte el mejor servicio posible. Siempre estamos aquí para ayudarte con cualquier pregunta o preocupación que puedas tener. ¡Gracias por elegirnos como tu destino de confianza para lentes y accesorios!</h4>
      </div>
    </>
  );
};

export default Soporte;
