import ButtonAdd from "./ButtonAdd"
import ButtonAddList from "./ButtonAddList"
import ButtonBack from "./ButtonBack"
import ButtonCancel from "./ButtonCancel"
import ButtonCreate from "./ButtonCreate"
import ButtonEdit from "./ButtonEdit"
import ButtonNewReg from "./ButtonNewReg"
import ButtonNext from "./ButtonNext"
import ButtonSave from "./ButtonSave"
import ButtonSaveList from "./ButtonSaveList"
import ButtonSkip from "./ButtonSkip"
import ButtonAttach from "./MedRecButtons/ButtonAttach"
import ButtonEval from "./MedRecButtons/ButtonEval"
import ButtonFact from "./MedRecButtons/ButtonFact"
import ButtonSection from "./MedRecButtons/ButtonSection"
import ButtonTinyClose from "./ButtonsTiny/ButtonTinyClose"
import ButtonTinyEdit from "./ButtonsTiny/ButtonTinyEdit"
import ButtonTinyTrash from "./ButtonsTiny/ButtonTinyTrash"
import ButtonTinyWatch from "./ButtonsTiny/ButtonTinyWatch"
import './styleButtons.css'

const Buttons = () => {
  return (
    <>
        <ButtonSave />
        <ButtonSaveList />
        <ButtonBack />
        <ButtonEdit />
        <ButtonAdd />
        <ButtonSkip />
        <ButtonCreate />
        <ButtonCancel />
        <ButtonNext />
        <ButtonNewReg />
        <div id="buttonsMedRecSection">
            <ButtonSection />
            <ButtonFact />
            <ButtonAttach />
            <ButtonEval />
        </div>
        <ButtonAddList />
        <div className="fakeModal">
            <div>
            <div><h2>Modal</h2></div><div><ButtonTinyClose /></div>  
            </div>
            <div>
                <p>This is the button close</p>
            </div>
        </div> 
        
        <ButtonTinyEdit /> 
        <ButtonTinyTrash />
        <ButtonTinyWatch />
    </>
  )
}

export default Buttons