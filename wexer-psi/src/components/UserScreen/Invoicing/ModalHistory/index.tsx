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
              <div className="headerHistory">
                <div>
                  <img src="/invoicing/history.svg" />
                </div>
                <div>
                  <h2 className="colorBlack">Histórico</h2>
                </div>
              </div>
              <div className="bodyHistory">
                <div>
                  <h2 className="colorBlack">Pagamentos</h2>
                </div>
                <div>
                  <table>
                    <tr>
                      <th>Valor: </th>
                      <th>Data: </th>
                      <th>Status: </th>
                    </tr>
                      <tr>
                        <td>R$ 0,00</td>
                        <td>xx/xx/xxxx</td>
                        <td>✅</td>
                      </tr>
                  </table>
                </div>
                <div className="downloadImg">
                  <img src="/invoicing/download.svg" />
                </div>
              </div>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalHistory;
