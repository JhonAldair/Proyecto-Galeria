import Galimgs from "../rmpCbzs/Galimgs";
import Header from "../rmpCbzs/Header";
import { useEffect } from 'react';

const Seguimiento = () => {
  useEffect(() => {
    document.title = "Seguimiento - BK Midia Criativa";
  }, []);
  
  return (
    <>
      <Header color="1" imagen="./imgs-header/seguimientomes.png" />
      <Galimgs titulo="« Seguimiento mes »" imagenes={[
        "./gallery-seguimiento/item1.png",
        "./gallery-seguimiento/item2.png",
        "./gallery-seguimiento/item3.png",
        "./gallery-seguimiento/item4.png",
        "./gallery-seguimiento/item5.png",
        "./gallery-seguimiento/item6.png",
        "./gallery-seguimiento/item7.png",
        "./gallery-seguimiento/item8.png",
      ]} />
    </>
  );
};

export default Seguimiento;
