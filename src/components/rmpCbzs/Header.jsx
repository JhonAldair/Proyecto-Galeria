/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";

function Header({color="0",imagen = "./imgs-header/inicio.png" }) {
  // Asignar la imagen recibida como prop
  const imga = `${imagen}`;
  const location = useLocation();   // Obtener la ubicación actual de la ruta para destacar la ruta activa
  const path = location.pathname;


  return (
    <header className="hd">
      <nav className="hd-nav-top">
        <ul>
          <li><Link id="nav-inicio" to="../" className={`link-${color }`}> INICIO /</Link></li>
          <li><Link id="nav-bodas" to="../bodas" className={`link-${color}`}> BODAS /</Link></li>
          <li><Link id="nav-maternidad" to="../maternidad" className={`link-${color}`}> MATERNIDAD /</Link></li>
          <li><Link id="nav-newBorn" to="../newBorn" className={`link-${color}`}> RECIÉN NACIDOS /</Link></li>
          <li><Link id="nav-seguimiento" to="../seguimiento" className={`link-${color}`}> SEGUIMIENTO /</Link></li>
          <li><Link id="nav-infantiles" to="../infantiles" className={`link-${color}`}> INFANTILES /</Link></li>
          <li><Link id="nav-smash" to="../smash" className={`link-${color}`}> SMASH</Link></li>
        </ul>
      </nav>

      <img src={imga} alt="" />
      
      <nav className="hd-nav-bottom">
        <ul>
          <li><Link id="nav-inicio" to="../" className={`link ${path === "/" ? "active" :""}`}>INICIO /</Link></li>
          <li><Link id="nav-bodas" to="../bodas" className={`link ${path === "/bodas" ? "active" :""}`}>BODAS /</Link></li>
          <li><Link id="nav-maternidad" to="../maternidad" className={`link ${path === "/maternidad" ? "active" :""}`}>MATERNIDAD /</Link></li>
          <li><Link id="nav-newBorn" to="../newBorn" className={`link ${path === "/newBorn" ? "active" :""}`}>RECIÉN NACIDOS /</Link></li>
          <li><Link id="nav-seguimiento" to="../seguimiento" className={`link ${path === "/seguimiento" ? "active" :""}`}>SEGUIMIENTO /</Link></li>
          <li><Link id="nav-infantiles" to="../infantiles" className={`link ${path === "/infantiles" ? "active" :""}`}>INFANTILES /</Link></li>
          <li><Link id="nav-smash" to="../smash" className={`link ${path === "/smash" ? "active" :""}`}>SMASH</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

/* 
========================================
Comentarios para el mantenimiento:

- Este componente genera un encabezado con navegación en dos niveles.
- La prop `color` define el color de los enlaces en la navegación superior.
- La prop `imagen` define la imagen que se muestra en el header.
- La clase `active` se añade dinámicamente a los enlaces de la navegación inferior basándose en la ruta actual, lo que permite resaltar la sección activa.

Contacto: jhonalda14@gmail.com
========================================
*/