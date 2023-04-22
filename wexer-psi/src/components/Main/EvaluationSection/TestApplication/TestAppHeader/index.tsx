import ButtonSave from "../../../../../reusable/Buttons/ButtonSave"
import ButtonSkip from "../../../../../reusable/Buttons/ButtonSkip"

const EvalFieldsHeader = () => {
    return (
      <>
        <div className="evalFieldsHeader">
            <span><h2>Aplicação de Teste</h2></span>
            <span className="dFlexRow">
              <ButtonSave />
              <ButtonSkip />
            </span>
          </div>
      </>
    )
  }
  
  export default EvalFieldsHeader