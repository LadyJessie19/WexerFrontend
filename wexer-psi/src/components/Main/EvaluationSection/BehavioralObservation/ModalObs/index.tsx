import { useState } from 'react';
import '../../../../../Modals/styleModals.css'
import ButtonSave from '../../../../../reusable/Buttons/ButtonSave';
import ButtonTinyClose from '../../../../../reusable/Buttons/ButtonsTiny/ButtonTinyClose';

function ModalObs() {
  const [isOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <ButtonSave onClick={handleModal}/>{/*   /* backgroundModal contentModal */ }
      {isOpen && (
        <div className="backgroundModal">
          <div className="contentModal">
            <ButtonTinyClose onClick={handleModal}/>
            <h2>Avaliação Psicológica salva com sucesso!</h2>
            <p>Você irá visualizar esta avaliação no prontuário do paciente</p>
            <button className="okButton">Ok</button>
            </div>
          </div>
      )}
    </div>
  );
}

export default ModalObs;
