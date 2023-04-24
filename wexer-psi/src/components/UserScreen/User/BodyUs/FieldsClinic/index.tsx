import { useState } from "react";
import ButtonSave from "../../../../../reusable/Buttons/ButtonSave";
import '../../../../../reusable/Buttons/styleButtons.css'
import ModalConfirm from "../ModalConfirm";

const FieldsClinic = () => {
  const [ modalOpen, setModalOpen] = useState(false)
    const handleModal = () => {
        setModalOpen(!modalOpen)
    }
  return (
    <>
      <div id="inputsGeneral">
        <div className="inputsLine">
          <div className="inputSolo">
            <label>Nome da clínica</label>
            <input value="Talita Rodrigues" className="inputSelf" type="text" />
          </div>
          <div className="inputSolo">
            <label>CEP</label>
            <input value="32681779" className="inputSelf" type="text" />
          </div>
          <div className="inputSolo">
            <label>Rua</label>
            <input value="Flores" className="inputSelf" type="text" />
          </div>
          <div className="inputSolo">
            <label>Número</label>
            <input value="25" className="smallInput" type="text" />
          </div>
        </div>
        <div className="inputsLine">
          <div className="inputSolo">
            <label>Bairro</label>
            <input value="Alterosa" className="inputSelf" type="text" />
          </div>
          <div className="inputSolo">
            <label>Cidade</label>
            <input value="Betim" className="inputSelf" type="text" />
          </div>
          <div className="inputSolo">
            <label>Estado</label>
            <input value="Minas Gerais" className="inputSelf" type="text" />
          </div>
          <ButtonSave onClick={handleModal}/>
          <ModalConfirm modalStatus={modalOpen} handleModal={handleModal} />
        </div>
      </div>
    </>
  );
};

export default FieldsClinic;
