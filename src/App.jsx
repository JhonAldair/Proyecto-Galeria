// se importan los módulos necesarios de React y React Router
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AppRouter } from "./Router"; // Importamos el enrutador principal de la aplicación
import ReactGA from "react-ga4"; // Importamos Google Analytics para rastrear el tráfico
import "./Styles/App.css"; //estilos

//ID de Google Analytics
const GA_TRACKING_ID = "G-35VLZTPLZ7";

//inicializacion de google analitycs
ReactGA.initialize(GA_TRACKING_ID);

// Componente para rastrear vistas de página en Google Analytics
const PageViewTracker = () => {
  const location = useLocation(); // Obtenemos la ubicación actual de la ruta

  useEffect(() => {
    // Cada vez que la ruta cambia, enviamos un evento de vista de página a Google Analytics
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search, // Ruta actual
      title: document.title, // Título de la página
    });
  }, [location]); // Este efecto se ejecuta cada vez que 'location' cambia

  return null; // Este componente no necesita renderizar nada
};

// Componente principal de la aplicación
function App() {
  const handleInstagram = () => {
    // Función que maneja los eventos de clic en el enlace de Instagram y los envía a Google Analytics
    ReactGA.event({
      category: "Social", //categoria del evento
      action: "redes", //accion asociada al evento
      label: "Instagram", //etiqueta del evento para identificarlo en Google Analitycs
    });

    console.log("Evento instagram enviado a Google Analytics");
  };

  const handleFacebook = () => {
    // Función que maneja los eventos de clic en el enlace de Instagram y los envía a Google Analytics
    ReactGA.event({
      category: "Social",
      action: "redes",
      label: "Facebook",
    });
    console.log("evento facebook enviado a Google Analitycs");
  };

  return (
    <>
      <Router>
        <Suspense fallback={<div> Cargando...</div>}>
          <PageViewTracker />
          <AppRouter />
        </Suspense>
      </Router>
      <footer className="footer">
        <div className="contenido">
          <a
            target="_blank"
            href="https://www.instagram.com/bkmidiacriativa/"
            onClick={handleInstagram}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
            <span>@bkmidiacriativa</span>
          </a>
          <a
            href="https://www.facebook.com/bkmidiacriativa"
            target="_blank"
            onClick={handleFacebook}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
            <span>BK Midia Criativa</span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;

/* 
========================================
Para cualquier duda o inquietud, puedes contactarnos a través del siguiente correo:
Correo de contacto: jhonalda14@gmail.com
========================================
*/
