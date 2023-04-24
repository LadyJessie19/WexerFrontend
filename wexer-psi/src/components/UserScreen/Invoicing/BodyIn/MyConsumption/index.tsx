import { useState } from "react";
import ModalMoreCredits from "../../ModalMoreCredits";

const MyConsumption = () => {
  const [ modalOpen, setModalOpen ] = useState(false)
  const handleModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <>
      <div className="greyCard">
        <div className="bannerBody">
          <p>Meu consumo</p>
        </div>
        <div className="contentCard">
          <div className="dFlex">
            <img src="/invoicing/circle.svg" />
            <img src="/invoicing/info.svg" />
          </div>
          <div>
            <img src="/invoicing/warning.svg" />
          </div>
          <div>
            <button className="btnGreen" onClick={handleModal}>Comprar créditos</button>
            <ModalMoreCredits modalStatus={modalOpen} handleModal={handleModal}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyConsumption;
