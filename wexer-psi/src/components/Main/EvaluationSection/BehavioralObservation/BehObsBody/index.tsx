
import ModalObs from "../ModalObs"
import TextAreaObs from "./TextAreaObs"

const BehObsBody = () => {
  return (
    <>
      <div id="backBodyObs">
        <h4>Síntese das observações comportamentais</h4>
        <TextAreaObs />
      </div>
        <ModalObs />
    </>
  )
}

export default BehObsBody