import { useState } from "react";
import "../../../../../../Modals/styleModals.css";
import ButtonFact from "../../../../../../reusable/Buttons/MedRecButtons/ButtonFact";

function ModalFact() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ButtonFact onClick={handleModal} />
      {isOpen && (
        <>
          <div className="backgroundModal" onClick={handleModal}></div>
          <div className="contentModal">
            <div>
              <h2>Novo Fato Relevante</h2>
              <button onClick={handleModal}>&times;</button>
            </div>
            <div>
              <div>
                <label>
                  Data*
                  <input type="date" />
                </label>
              </div>
              <div>
                <label>
                  Titulo*
                  <input type="text" />
                </label>
              </div>
              <div>
                <label>
                  Descrição*
                  <textarea cols="30" rows="10">Text</textarea>
                </label>
                <div>
                  <small>*Campos Obrigatórios</small>
                </div>
                <div>
                  <button>Cancelar</button>
                  <button>Criar</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalFact;
