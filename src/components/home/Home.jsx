import Header from "../rmpCbzs/Header.jsx";
import "../../Styles/App.css"
import Galimgs from "../rmpCbzs/Galimgs.jsx";
import { useEffect } from 'react'; // Hook para efectos secund



function Home() {
  // Actualiza el título de la pestaña cuando se carga el componente
  useEffect(() => {
    document.title = "Home - BK Midia Criativa";
  }, []);// Este efecto solo se ejecuta una vez al montar el componente
  
  return (
    <>
      <Header />
      <section className="sc-info">
        <img src="julispain.jpg" alt="#" />
        <div className="sc-info-d">
          <h2 className="subtitulo">« Quien soy » </h2>
          <p>
            ¡Hola! Soy Juliana España, la fotógrafa detrás de BK MIDIA CRIATIVA
            SAS. Como mamá de un niño de 8 años y con raíces amazónicas, he
            llevado mi pasión por la fotografía a un nivel completamente nuevo.
            Con más de 5 años en el mercado, BK se ha convertido en mucho más
            que un estudio fotográfico: es un sueño hecho realidad.
            <br />
            <br />
            En BK, nos especializamos en capturar los momentos más especiales de
            la vida familiar y eventos diversos. Cada sesión es una oportunidad
            para crear recuerdos duraderos y emocionantes. Desde sesiones Bebés,
            mamás y Familia hasta grandes celebraciones, estamos aquí para
            asegurarnos de que cada imagen cuente una historia única y hermosa.
            <br />
            <br />
            Nos enorgullece ofrecer un enfoque cálido y profesional a cada
            cliente que camina por nuestras puertas. Con BK, no solo obtienes
            fotografías increíbles, sino también una experiencia que recordarás
            para siempre. ¡Estamos aquí para hacer que tus momentos más
            preciados cobren vida a través de nuestras lentes!
          </p>
        </div>
      </section>
      <Galimgs
        imagenes={[
          "./gallery-inicio/atardecer.png",
          "./gallery-inicio/bebe-brazos.png",
          "./gallery-inicio/boda-ramo.png",
          "./gallery-inicio/embarazada.png",
          "./gallery-inicio/embarazo-azul.png",
          "./gallery-inicio/nina-riendo.png",
          "./gallery-inicio/nino-pelota.png",
          "./gallery-inicio/playa.png",
        ]}
      />
    </>
  );
}

export default Home;

/* 
========================================
Comentarios para el mantenimiento:

- Este componente genera la presentacion, donde esta una imagen y un texto, ademas rederiza la galeria de imagenes

========================================
*/