import ModalAttach from "./ModalAttach"
import ModalEvaluation from "./ModalEvaluation"
import ModalFact from "./ModalFact"
import ModalSection from "./ModalSection"
const NewNoteBar = () => {
  return (
    <div id='newNoteBar'>
        <input type="text" placeholder='Faça suas anotações pessoais aqui...' />
        <hr />
        <div id='buttonsNewNote'>
            <div className='buttonNewNote'>
                <img src="/main/health2.svg" width={'25px'} />
                <ModalSection />
            </div>
            <div className='buttonNewNote'>
            <img src="/main/map2.svg" width={'25px'} />
                <ModalFact />
            </div>
            <div className='buttonNewNote'>
            <img src="/main/2.svg" width={'25px'} />
                <ModalAttach />
            </div>
            <div className='buttonNewNote'>
            <img src="/main/doc2.svg" width={'20px'} />
                <ModalEvaluation />
            </div>
        </div>
    </div>
  )
}

export default NewNoteBar