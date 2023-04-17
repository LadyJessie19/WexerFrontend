import BackToTop from "./BackToTop"
import CardNote from "./CardNote"
import DivisionFilter from "./DivisionFilter"
import NewNoteBar from "./NewNoteBar"

const MedicalRecordSide = () => {
  return (
    <div id="medicalRecordSide">
        <NewNoteBar />
        <DivisionFilter />
        <CardNote />
        <BackToTop />
    </div>
  )
}

export default MedicalRecordSide