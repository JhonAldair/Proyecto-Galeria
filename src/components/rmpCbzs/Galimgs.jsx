/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Galimgs = ({
  titulo = "«mi trabajo»",
  imagenes = [ // Lista de imágenes a mostrar, valor predeterminado
    "./gallery-inicio/bebe-brazos.png",
    "./gallery-inicio/bebe-brazos.png",
    "./gallery-inicio/bebe-brazos.png",
    "./gallery-inicio/bebe-brazos.png",
    "./gallery-inicio/bebe-brazos.png",
    "./gallery-inicio/bebe-brazos.png",
    "./gallery-inicio/bebe-brazos.png",
    "./gallery-inicio/bebe-brazos.png",
  ],
}) => {
  // Estados para almacenar imágenes anchas, altas y el estado del modal
  const [wideImages, setWideImages] = useState([]);
  const [tallImages, setTallImages] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const handleImages = () => {
      const wideImgs = [];
      const tallImgs = [];

      // Iterar sobre las imágenes y clasificarlas según su proporción
      imagenes.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
        // Clasificar las imágenes en anchas o altas
          if (img.naturalWidth > img.naturalHeight) {
            wideImgs.push(src);
          } else {
            tallImgs.push(src);
          }
          // Actualizar los estados cuando todas las imágenes se hayan cargado
          if (wideImgs.length + tallImgs.length === imagenes.length) {
            setWideImages(wideImgs);
            setTallImages(tallImgs);
          }
        };
      });
    };

    handleImages();
  }, [imagenes]);// Volver a ejecutar cuando cambien las imágenes

  // Manejar la apertura del modal para ver la imagen en grande
  const handleModal = (src) => {
    setModal(src);
  };

  // Cerrar el modal
  const closeModal = () => {
    setModal(null);
  };

  return (
    <section className="gallery">
      <h1>{titulo}</h1>
      <div className={`gallery-container one-per-row`}>
        {wideImages.map((src, i) => (
          <div
            onClick={() => handleModal(src)}
            className="gallery-item"
            key={`wide-${i}`}
          >
            <img src={src} alt={`Imagen ancha ${i}`} />
          </div>
        ))}
      </div>

      <div className="gallery-container tall-images">
        {tallImages.map((src, i) => (
          <div
            onClick={() => handleModal(src)}
            className="gallery-item"
            key={`tall-${i}`}
          >
            <img src={src} alt={`Imagen alta ${i}`} />
          </div>
        ))}
      </div>

      {modal && (
        <div className="modal">
          <div
            className="modal-content"
          >
            <span onClick={closeModal} className="close-btn">
              &times;
            </span>
            <img src={modal} alt="Modal" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Galimgs;

/* 
========================================
Comentarios para el mantenimiento:

- Este componente genera una galería de imágenes (gal-imgs), clasificando las imágenes en anchas y altas según sus proporciones.
- Las imagenes altas y anchas se distribuyen de diferente forma en la pagina, ya que las imagenes anchas estaran mas arriba que las imagenes altas, 
- Al hacer clic en una imagen, esta se muestra en un modal para visualizarla en grande.
- El estado `wideImages` almacena las imágenes anchas y `tallImages` almacena las imágenes altas.
- La funcionalidad del modal está controlada por el estado `modal` y las funciones `handleModal` y `closeModal`.
- Asegúrate de que las imágenes proporcionadas en el array `imagenes` estén correctamente formateadas y disponibles en las rutas definidas.

Contacto: jhonalda14@gmail.com
========================================  
*/