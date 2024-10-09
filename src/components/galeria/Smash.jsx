import Galimgs from "../rmpCbzs/Galimgs";
import Header from "../rmpCbzs/Header";
import { useEffect } from 'react';

const Smash = () => {
  useEffect(() => {
    document.title = "Seguimiento  - BK Midia Criativa";
  }, []);
  
  return (
    <>
      <Header imagen="./imgs-header/smash.png" />
      <Galimgs titulo="« Smash Cake »" imagenes={[
        "./gallery-smash/item1.png",
        "./gallery-smash/item2.png",
        "./gallery-smash/item3.png",
        "./gallery-smash/item4.png",
        "./gallery-smash/item5.png",
        "./gallery-smash/item6.png",
        "./gallery-smash/item7.png",
        "./gallery-smash/item8.png",
        "./gallery-smash/item9.png",
        "./gallery-smash/item10.png",
      ]}/>
    </>
  );
};

export default Smash;
