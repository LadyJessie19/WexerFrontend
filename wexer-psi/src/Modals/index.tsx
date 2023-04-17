import ModalSection from "./ModalSection";
import ModalFact from "./ModalFact";
import ModalAttach from "./ModalAttach";
import ModalEvaluation from "./ModalEvaluation";
import ModalNotes from "./ModalNotes";
import './style.css'
import ModalService from "./ModalService";

const Modals = () => {
  return (
    <>
      <div>
        <ModalSection />
        <ModalFact />
        <ModalAttach />
        <ModalEvaluation />
        <ModalNotes />
        <ModalService />
      </div>
    </>
  );
};

export default Modals;

