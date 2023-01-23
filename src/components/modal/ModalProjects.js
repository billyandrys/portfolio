import ReactDOM from "react-dom";
import { useEffect } from "react";
import "./style.css";

const ModalProjects = ({ show, close }) => {
  const partNode = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(partNode);

    return () => {
      partNode.remove();
    };
  }, [partNode]);

  return (
    <>
      
      {show
        ? ReactDOM.createPortal(
            <div className="modalContainer" onClick={() => close()}>
              {document
                .querySelectorAll("body")
                .forEach((target) => target.classList.add("noScroll"))}
              <div className="modalProject" onClick={(e) => e.stopPropagation()}>
                <header className="modal_header">
                  <h2 className="modal_header_title">Algo de mís desarrollos</h2>
                  <button className="close" onClick={() => close()}>
                    x
                  </button>
                  <p className='experience_note'><span className='resalt'>Inventario de equipos de computos: </span> 
                   sistema de inventarios y asignación de equipos de computos para  alunmnos SENA (aplicación de escritorio)<br/>
                     <span className='resalt'>Diseño y implementación de front end.</span>Restructuración de diseño
basado HTML 5, diseño
responsivo a dispositivos
móviles. <br/>
                     <span className='resalt'>Henry Dogs: </span>aplicación de busqueda y creación de razas de perros.</p>
                 


                  
                </header>
                
              </div>
            </div>,
            partNode
          )
        : document
            .querySelectorAll("body")
            .forEach((target) => target.classList.remove("noScroll"))}
    </>
  );
};

export default ModalProjects;
