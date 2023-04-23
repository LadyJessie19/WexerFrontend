import { useState } from "react";
import "../../../../../../Modals/styleModals.css";
import ButtonAttach from "../../../../../../reusable/Buttons/MedRecButtons/ButtonAttach";
import ButtonCancel from "../../../../../../reusable/Buttons/ButtonCancel";
import ButtonCreate from "../../../../../../reusable/Buttons/ButtonCreate";
import ButtonTinyClose from "../../../../../../reusable/Buttons/ButtonsTiny/ButtonTinyClose";

function ModalAttach() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ButtonAttach onClick={handleModal} />
      {isOpen && (
        <>
          <div className="backgroundModal" onClick={handleModal}></div>
          <div className="contentModal">
            <div className="dFlex centerStart mb1">
              <h2>Novo Anexo</h2>
              <ButtonTinyClose onClick={handleModal} />
            </div>
            <div className="dFlex flexCol startCenter mb1">
              <div className="dFlex gap1 startCenter mb1">
                <div>
                  <label>
                    Data*
                    <input className="input" value={"2023-01-24"} type="date" />
                  </label>
                </div>
                <div>
                  <label>
                    Titulo*
                    <input className="input" placeholder="Digite" type="text" />
                  </label>
                </div>
              </div>
            </div>
              <label className="dFlex flexCol startCenter mb1">
                Descrição*
                <textarea className="textarea" placeholder="Text"></textarea>
              </label>
              <div>
                <label>
                  Anexar arquivos*
                  <input className="input" type="file" />
                </label>
              </div>
              <hr />
                <div className="dFlex spaBet pad1">
                <div>
                  <small>*Campos Obrigatórios</small>
                </div>
                <div className="dFlex">
                  <ButtonCancel />
                  <ButtonCreate />
                </div>
                </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalAttach;