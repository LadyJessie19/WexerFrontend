import "./style.css";
import ButtonTinyClose from "../../../../../reusable/Buttons/ButtonsTiny/ButtonTinyClose";
import { Link } from "react-router-dom";

interface ModalProps {
  modalStatus: boolean;
  handleModal: () => void;
}

const ModalConfirm: React.FC<ModalProps> = ({ modalStatus, handleModal }) => {
  return (
    <>
      {modalStatus && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <ButtonTinyClose onClick={handleModal} />
            </div>
            <div className="modal-content">
              <h2>Dados atualizados com sucesso!</h2>
              <p>
              Vamos cadastrar seu primeiro paciente.
              </p>
              <Link to='/pacientes'><button className="btnGreen">Vamos lá</button></Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalConfirm;
