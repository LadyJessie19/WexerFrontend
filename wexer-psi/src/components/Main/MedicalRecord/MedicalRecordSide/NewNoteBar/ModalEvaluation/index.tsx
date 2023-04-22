import { useState } from "react";
import '../../../../../../Modals/styleModals.css'
import ButtonEval from "../../../../../../reusable/Buttons/MedRecButtons/ButtonEval";
import { Link } from "react-router-dom";

function ModalEvaluation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ButtonEval onClick={handleModal} />
      {isOpen && (
        <>
          <div className="backgroundModal" onClick={handleModal}></div>
          <div className="contentModal">
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
                  <Link to="/avaliacao"><button>Prosseguir</button></Link>
                </div>
              </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalEvaluation;