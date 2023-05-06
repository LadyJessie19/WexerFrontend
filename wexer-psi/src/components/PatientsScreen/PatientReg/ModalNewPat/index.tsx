import "./style.css";
import ButtonTinyClose from "../../../../reusable/Buttons/ButtonsTiny/ButtonTinyClose";

interface ModalProps {
  modalStatus: boolean;
  handleModal: () => void;
}

const ModalHistory: React.FC<ModalProps> = ({ modalStatus, handleModal }) => {
  return (
    <>
      {modalStatus && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <ButtonTinyClose onClick={handleModal} />
            </div>
            <div className="modal-content">
              <h2>Paciente cadastrado com sucesso!</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalHistory;
