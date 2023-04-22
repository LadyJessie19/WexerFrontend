import { useState } from 'react';
import '../style.css';
import ButtonNewReg from '../../../reusable/Buttons/ButtonNewReg';
import { Link } from 'react-router-dom';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ButtonNewReg btnFunction={handleModal}/>
      {isOpen && (
        <>
          <div className="modalE-backdrop" onClick={handleModal}></div>
          <div className="modalE">
            <div id="modalImg">
              <img src="/modal-welcome/greyGradient.svg" id='greyGradient'/>
              <img src="/modal-welcome/womanDesktop.svg" id='womanDesktop'/>
            </div>
            <h2>Bem vindo(a) ao Wexer Psi!</h2>
            <p>Vamos começar atualizando seus dados</p>
            <button className='btnVamosLa'>
            <Link to="/registro-paciente">Vamos lá</Link>  
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Modal;
