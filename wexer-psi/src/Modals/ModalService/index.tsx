import { useState } from "react";
import "../styleModals.css";
import ButtonTinyEdit from "../../reusable/Buttons/ButtonsTiny/ButtonTinyEdit";
import ButtonTinyClose from "../../reusable/Buttons/ButtonsTiny/ButtonTinyClose";

function ModalService() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ButtonTinyEdit onClick={handleModal} />
      {isOpen && (
        <>
          <div className="backgroundModal" onClick={handleModal}></div>
          <div className="contentModal">
            <div>
              <h2>Novo serviço</h2>
              <ButtonTinyClose onClick={handleModal} />
            </div>
            <div>
                <small className="greenText fontL">Paciente</small>
                <p>Ana Ester Resende</p>
            </div>
            <div>
                <small className="greenText fontL">CPF</small>
                <p>114.559.886-78</p>
            </div>
            <div>
                <div>
                  <label>Data inicial 
                    <input className="input mb1" value="2021-06-14" type="date" />
                  </label>
                </div>
                <div>
                <label>Serviço
                    <select className="input mb1">
                      <option value="1">Opção 1</option>
                      <option value="2">Opção 2</option>
                      <option value="3">Opção 3</option>
                    </select>
                </label>
                </div>
                <div>
                <label>Demandas e objetivos
                    <textarea className="textarea mb1"></textarea>
                  </label>
                </div>
            </div>
              <div>
                  <button className="btnSave">Salvar</button>
              </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalService;