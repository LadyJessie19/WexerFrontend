import "./style.css"
import NavBar from './NavBar'
import Notes from "./Notes"
import MedicalRecord from "./MedicalRecord"
import EvaluationSection from "./EvaluationSection"

const Main = () => {
  return (
    <div className="MainComp">
        <NavBar />
        <EvaluationSection />
        {/* <Notes /> */}
        {/* <MedicalRecord /> */}
    </div>
  )
}

export default Main