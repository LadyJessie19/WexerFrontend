import { useState } from "react";
import ButtonSave from "../../../../../reusable/Buttons/ButtonSave";
import '../../../../../reusable/Buttons/styleButtons.css'
import ModalConfirm from "../ModalConfirm";

const FieldsClinic = () => {
  const [ modalOpen, setModalOpen] = useState(false)
    const handleModal = () => {
        setModalOpen(!modalOpen)
    }
    const userData = JSON.parse(localStorage.getItem('user') ?? '{}');
  return (
    <>
      <div id="inputsGeneral">
        <div className="inputsLineUser">
          <div className="inputSolo">
            <label>Nome da clínica</label>
            <input value={userData.clinicName} className="inputSelf" type="text" />
          </div>
          <div className="inputSolo">
            <label>CEP</label>
            <input value={userData.cep} className="inputSelf" type="text" />
          </div>
          <div className="inputSolo">
            <label>Rua</label>
            <input value={userData.street} className="inputSelf" type="text" />
          </div>
          <div className="inputSolo">
            <label>Número</label>
            <input value={userData.number} className="smallInput" type="text" />
          </div>
        </div>
        <div className="inputsLineUser">
          <div className="inputSolo">
            <label>Bairro</label>
            <input value={userData.neighborhood} className="inputSelf" type="text" />
          </div>
          <div className="inputSolo">
            <label>Cidade</label>
            <input value={userData.city} className="inputSelf" type="text" />
          </div>
          <div className="inputSolo">
            <label>Estado</label>
            <input value={userData.state} className="inputSelf" type="text" />
          </div>
          <ButtonSave onClick={handleModal}/>
          <ModalConfirm modalStatus={modalOpen} handleModal={handleModal} />
        </div>
      </div>
    </>
  );
};

export default FieldsClinic;
