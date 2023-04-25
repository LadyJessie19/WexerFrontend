import { useState } from "react";
import ButtonSave from "../../../../../reusable/Buttons/ButtonSave"
import '../../../../../reusable/Buttons/styleButtons.css'
import ModalConfirm from "../ModalConfirm";

const FieldsPassword = () => {
  const [ modalOpen, setModalOpen] = useState(false)
    const handleModal = () => {
        setModalOpen(!modalOpen)
    }
  return (
    <>
      <div id="inputsGeneral">
        <div className="inputsLineUser">
            
            <div className="inputSolo">
              <label>Senha</label>
              <input value="********" className="inputSelf" type="text" />
            </div>

            <div className="inputSolo">
              <label>Confirmar</label>
              <input value="********" className="inputSelf" type="text" />
            </div>
            <ButtonSave onClick={handleModal}/>
            <ModalConfirm modalStatus={modalOpen} handleModal={handleModal} />
          </div>
        </div>
    </>
  );
};

export default FieldsPassword;
