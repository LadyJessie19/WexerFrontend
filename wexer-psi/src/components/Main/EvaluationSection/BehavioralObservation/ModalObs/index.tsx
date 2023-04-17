import { useState } from 'react';
import './style.css'

function ModalObs() {
  const [isOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={handleModal}>Salvar</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-overlay" onClick={handleModal}></div>
          <div className="modal-content">
            <button onClick={handleModal}>X</button>
            <img src="/evaluation/circle.png" />
            <h2>Avaliação Psicológica salva com sucesso!</h2>
            <p>Você irá visualizar esta avaliação no prontuário do paciente</p>
            <button>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalObs;
