import "./style.css";
import ButtonTinyClose from "../../../../reusable/Buttons/ButtonsTiny/ButtonTinyClose";

interface ModalProps {
  modalStatus: boolean;
  handleModal: () => void;
}

const ModalMoreCredits: React.FC<ModalProps> = ({
  modalStatus,
  handleModal,
}) => {
  return (
    <>
      {modalStatus && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <div>
                <img src="" />
              </div>
              <div>
                <h2>Adicione mais teste</h2>
              </div>
              <div>
                <ButtonTinyClose onClick={handleModal} />
              </div>
            </div>
            <div className="modal-content">

              <div className="sectionAddTests">
                <div className="headerAddTests">
                  <img src="" />
                  <p>Adicionar testes</p>
                </div>
                <div className="bodyAddTests">
                  <div>
                    <p>Quantidade desejada:</p>
                  </div>
                  <div>
                    <select>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="sectionPayment">
                <div>
                  <div>
                    <h2>Pagamento</h2>
                  </div>
                  <div>
                    <small>Alterar</small>
                  </div>
                </div>
                <hr />
                <div>
                  <p><strong>Total: </strong> R$0,00</p>
                </div>
                <div>
                  <img src="" />
                  <p>MASTERCARD com final: 1252</p>
                  <p><strong>Expira em:</strong> 12/21</p>
                </div>
                <div>
                  <button className="greenButton">Finalizar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMoreCredits;
