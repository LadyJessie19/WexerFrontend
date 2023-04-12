import { useState } from 'react';
import '../style.css';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleModal}>Open Modal</button>
      {isOpen && (
        <>
          <div className="modal-backdrop" onClick={handleModal}></div>
          <div className="modal">
            <div id="modalImg">
              <img src="/modal-welcome/greyGradient.svg" id='greyGradient'/>
              <img src="/modal-welcome/womanDesktop.svg" id='womanDesktop'/>
            </div>
            <h2>Modal Title</h2>
            <p>Modal content goes here.</p>
            <button onClick={handleModal}>Close Modal</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Modal;
