import ReactDOM from "react-dom";
import { useEffect } from "react";
import "./style.css";

const ModalEstudy = ({ show, close }) => {
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
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <header className="modal_header">
                  <h2 className="modal_header_title">Algo de mís estudíos</h2>
                  <button className="close" onClick={() => close()}>
                    x
                  </button>
                  <p className='experience_note'><span className='resalt'>SENA: </span> Servicio Nacional de Aprendizaje,
                   obtuve una Tecnología en análisis y desarrollo de sistemas de información<br/>
                     <span className='resalt'>Certificaciones de Microsoft: </span>obtuve una certificación en Technology Specialist .NET FRAMEWORK 3.5 ASP.NET Applications.<br/>
                     <span className='resalt'>HERNY: </span> Actualmente cursando certificación  en desarrollo full stack.</p>
                 


                  
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

export default ModalEstudy;
