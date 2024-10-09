import Galimgs from "../rmpCbzs/Galimgs";
import Header from "../rmpCbzs/Header";
import { useEffect } from "react";

const Infantiles = () => {
  useEffect(() => {
    document.title = "Infantiles - BK Midia Criativa";
  }, []);

  return (
    <>
      <Header color="1" imagen="./imgs-header/infantiles.png" />{" "}
      <Galimgs
        titulo="« Infantiles »"
        imagenes={[
          "./gallery-infantiles/item1.png",
          "./gallery-infantiles/item2.png",
          "./gallery-infantiles/item3.png",
          "./gallery-infantiles/item4.png",
          "./gallery-infantiles/item5.png",
          "./gallery-infantiles/item6.png",
          "./gallery-infantiles/item7.png",
          "./gallery-infantiles/item8.png",
          "./gallery-infantiles/item9.png",
          "./gallery-infantiles/item10.png",
        ]}
      />
    </>
  );
};

export default Infantiles;
