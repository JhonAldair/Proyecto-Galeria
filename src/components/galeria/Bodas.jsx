import Galimgs from "../rmpCbzs/Galimgs";
import Header from "../rmpCbzs/Header";
import { useEffect } from 'react';

const Bodas = () => {
  useEffect(() => {
    document.title = "Bodas - BK Midia Criativa";
  }, []);

  return (
    <>
      <Header imagen="./imgs-header/bodas.png" />
      <Galimgs
        titulo="« Bodas »"
        imagenes={[
          "./gallery-bodas/atardecer.png",
          "./gallery-bodas/blanconegro.png",
          "./gallery-bodas/blanconegro1.png",
          "./gallery-bodas/blanconegro2.png",
          "./gallery-bodas/blanconegro3.png",
          "./gallery-bodas/blanconegro4.png",
          "./gallery-bodas/boda-atardecer.png",
          "./gallery-bodas/boda-ramo.png",
          "./gallery-bodas/crepusculo.png",
          "./gallery-bodas/novia-novio.png",
          "./gallery-bodas/novia.png",
          "./gallery-bodas/novia-escaleras.png",
        ]}
      />
    </>
  );
};

export default Bodas;

/* 
========================================
Comentarios para el mantenimiento:

- El componente Header recibe una imagen personalizada para la sección de bodas, lo que hace que cada sección tenga su propio encabezado visual.
========================================
*/