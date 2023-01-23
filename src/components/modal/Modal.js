import ReactDOM from "react-dom";
import { useEffect } from "react";
import "./style.css";

const Modal = ({ show, close }) => {
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
                  <h2 className="modal_header_title">Algo de mí experiencia</h2>
                  <button className="close" onClick={() => close()}>
                    x
                  </button>
                  <p className='experience_note'>Inicie programando con visual .NET, realizado projectos de escritorios,
                  con conexiones a motor de base de datos, SQL SERVER 2005.<br/>
                  Posteriormente migre al desarrollo web , con lenguje backend PHP.<br/>
                  Actualmente me encuentro desarrollando con STACK PERN React + Node.js + Express + PostgreSQL.


                  </p>
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

export default Modal;
