import { useState } from "react";
import "../style.css";

function ModalEvaluation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleModal}>Avaliação Psicológica</button>
      {isOpen && (
        <>
          <div className="modal-backdrop" onClick={handleModal}></div>
          <div className="modal">
            <div>
              <h2>Nova Avaliação Psicológica</h2>
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
                <h5>Atenção</h5>
                <p>Você será <strong>redirecionado para uma nova página </strong> onde irá preencher od dados da avaliação psicológica </p>
              </div>
                
            </div>
              <div>
                <div>
                  <small>*Campos Obrigatórios</small>
                </div>
                <div>
                  <button>Cancelar</button>
                  <button>Criar</button>
                </div>
              </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalEvaluation;