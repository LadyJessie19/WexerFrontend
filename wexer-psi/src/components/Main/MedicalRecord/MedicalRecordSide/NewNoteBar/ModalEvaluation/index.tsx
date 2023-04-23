import { useState } from "react";
import '../../../../../../Modals/styleModals.css'
import ButtonEval from "../../../../../../reusable/Buttons/MedRecButtons/ButtonEval";
import { Link } from "react-router-dom";
import ButtonTinyClose from "../../../../../../reusable/Buttons/ButtonsTiny/ButtonTinyClose";
import ButtonCancel from "../../../../../../reusable/Buttons/ButtonCancel";
import ButtonNext from "../../../../../../reusable/Buttons/ButtonNext";

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
            <div className="dFlex spaBet">
              <h2>Nova Avaliação Psicológica</h2>
              <ButtonTinyClose onClick={handleModal} />
            </div>
            <div>
              <div>
                <label>
                  Data*
                  <input className="input" value={'2023-01-24'} type="date" />
                </label>
              </div>
              <div className="pad1">
                <div className="greenBack">
                  <h4 className="greenText">Atenção!</h4>
                  <p>Você será <em><strong>redirecionado para uma nova página </strong></em> onde irá preencher od dados da avaliação psicológica. </p>
                </div>

              </div>
                
            </div>
            <hr />
              <div>
                <div className="dFlex spaBet">
                <div>
                  <small>*Campos Obrigatórios</small>
                </div>
                <div className="dFlex">
                  <ButtonCancel />
                  <Link to="/avaliacao"><ButtonNext /></Link>
                </div>
                </div>
              </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalEvaluation;