import { useState } from "react";
import ModalHistory from "../../ModalHistory";

const InvoicingBar = () => {
  const [ modalOpen, setModalOpen ] = useState(false)
  const handleModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <>
      <div className="greyCard">
        <div className="bannerBody">
          <p>Faturamento</p>
        </div>
        <div className="contentCard">
          <div>
            <div>
                <p className="font600">Último pagamento: 05/10/2021</p>
            </div>
            <div>
                <p className="colorBlue" onClick={handleModal}>Ver histórico de faturamento</p>
                <ModalHistory modalStatus={modalOpen} handleModal={handleModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoicingBar;
