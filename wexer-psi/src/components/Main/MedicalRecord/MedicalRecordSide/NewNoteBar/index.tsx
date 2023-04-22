import ModalAttach from "./ModalAttach"
import ModalEvaluation from "./ModalEvaluation"
import ModalFact from "./ModalFact"
import ModalSection from "./ModalSection"
import '../../../../../Modals/styleModals.css'

const NewNoteBar = () => {
  return (
    <div id='newNoteBar'>
        <input type="text" placeholder='Faça suas anotações pessoais aqui...' />
        <hr />
        <div id='buttonsNewNote'>
            <div className='buttonNewNote'>
                <ModalSection />
            </div>
            <div className='buttonNewNote'>
                <ModalFact />
            </div>
            <div className='buttonNewNote'>
                <ModalAttach />
            </div>
            <div className='buttonNewNote'>
                <ModalEvaluation />
            </div>
        </div>
    </div>
  )
}

export default NewNoteBar