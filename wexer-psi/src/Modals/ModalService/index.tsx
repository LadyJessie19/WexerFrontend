import { useState } from "react";
import "../styleModals.css";
import ButtonTinyEdit from "../../reusable/Buttons/ButtonsTiny/ButtonTinyEdit";

function ModalService() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ButtonTinyEdit onClick={handleModal} />
      {isOpen && (
        <>
          <div className="backgroundModal" onClick={handleModal}></div>
          <div className="contentModal">
            <div>
              <h2>Novo serviço</h2>
              <button onClick={handleModal}>&times;</button>
            </div>
            <div>
                <small>Paciente</small>
                <p>Ana Ester Resende</p>
            </div>
            <div>
                <small>CPF</small>
                <p>114.559.886-78</p>
            </div>
            <div>
                <div>
                  <label>Data inicial 
                    <input type="text" />
                  </label>
                </div>
                <div>
                <label>Serviço
                    <input type="text" />
                </label>
                </div>
                <div>
                <label>Demandas e objetivos
                    <textarea cols="30" rows="5"></textarea>
                  </label>
                </div>
            </div>
              <div>
                  <button>Salvar</button>
              </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalService;