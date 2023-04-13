import ModalSection from "./ModalSection";
import ModalFact from "./ModalFact";
import ModalAttach from "./ModalAttach";
import ModalEvaluation from "./ModalEvaluation";
import ModalNotes from "./ModalNotes";
import './style.css'

const Modals = () => {
  return (
    <>
      <div>
        <ModalSection />
        <ModalFact />
        <ModalAttach />
        <ModalEvaluation />
        <ModalNotes />
      </div>
    </>
  );
};

export default Modals;

