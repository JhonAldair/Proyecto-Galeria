import Galimgs from "../rmpCbzs/Galimgs";
import Header from "../rmpCbzs/Header";
import { useEffect } from 'react';

const NewBorn = () => {
  useEffect(() => {
    document.title = "newBorn - BK Midia Criativa";
  }, []);
  
  return (
    <>
      <Header imagen="./imgs-header/reciennacidos.png" />;
      <Galimgs
        titulo="« recien nacidos »"
        imagenes={[
          "./gallery-newBorn/item1.png",
          "./gallery-newBorn/item2.png",
          "./gallery-newBorn/item3.png",
          "./gallery-newBorn/item4.png",
          "./gallery-newBorn/item5.png",
          "./gallery-newBorn/item6.png",
          "./gallery-newBorn/item7.png",
          "./gallery-newBorn/item8.png",
          "./gallery-newBorn/item9.png",
          "./gallery-newBorn/item10.png",
        ]}
      />
    </>
  );
};

export default NewBorn;
