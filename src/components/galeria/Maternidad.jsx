import Galimgs from "../rmpCbzs/Galimgs";
import Header from "../rmpCbzs/Header";
import { useEffect } from 'react';


const Maternidad = () => {
  useEffect(() => {
    document.title = "Maternidad - BK Midia Criativa";
  }, []);
  
  return (
    <>
      <Header color="1" imagen="./imgs-header/maternidad.png" />
      <Galimgs titulo="« maternidad »" imagenes={[          
          "./gallery-maternidad/acostados.png",
          "./gallery-maternidad/blanco.png",
          "./gallery-maternidad/blanconegro.png",
          "./gallery-maternidad/blanconegro1.png",
          "./gallery-maternidad/corona.png",
          "./gallery-maternidad/embarazo-azul.png",
          "./gallery-maternidad/embarazo-persiana.png",
          "./gallery-maternidad/espejo.png",
          "./gallery-maternidad/finca-morada.png",
          "./gallery-maternidad/laguna.png",
          "./gallery-maternidad/pareja-embarazada.png",
          "./gallery-maternidad/playa-embarazo.png",
        ]} />
    </>
  );
};

export default Maternidad;
