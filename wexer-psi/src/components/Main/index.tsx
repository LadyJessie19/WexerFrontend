import "./style.css"
import NavBar from './NavBar'
import SearchBar from "./SearchBar"
import InfoSide from "./InfoSide"
import MedicalRecordSide from "./MedicalRecordSide"

const Main = () => {
  return (
    <div className="MainComp">
        <NavBar />
        <SearchBar />
        <InfoSide />
        <MedicalRecordSide />
    </div>
  )
}

export default Main