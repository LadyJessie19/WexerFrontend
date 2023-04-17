import InfoSide from "../InfoSide"
import MedicalRecordSide from "../MedicalRecordSide"
import SearchBar from "./SearchBar"

const MedicalRecord = () => {
  return (
    <>
        <SearchBar />
        <InfoSide />
        <MedicalRecordSide />
    </>
  )
}

export default MedicalRecord