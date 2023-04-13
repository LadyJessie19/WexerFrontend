import { useState } from 'react';
import '../style.css';

function ModalSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleModal}>Sessão</button>
      {isOpen && (
        <>
          <div className="modal-backdrop" onClick={handleModal}></div>
          <div className="modal">
            <div>
                <h2>Nova Sessão</h2>
                <button onClick={handleModal}>&times;</button>
            </div>
            <div>
                <span>1</span> <span>Dados Gerais</span> 
            </div>
            <div>
                <div>
                    <label>
                        Data*
                        <input type="date"/>
                    </label>
                </div>
                <div>
                    <label>
                        Hora de inicio*
                        <input type="time"/>
                    </label>
                </div>
                <div>
                    <label>
                        Hora fim*
                        <input type="time"/>
                    </label>
                </div>
            
            </div>
            <hr />
            <div>
                <span>2</span>  <span>Sessão</span>
            </div>
            <div>
                <div>
                    <label>
                        Titulo*
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        Resumo da sessão*
                        <textarea cols="30" rows="10"></textarea>
                    </label>
                </div>
            </div>
            <div>
                <div>
                    <small>*Campos Obrigatórios</small>
                </div>
                <div>
                    <button>Cancelar</button>
                    <button>Criar</button>
                </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalSection;
