import MedicalRecord from './MedicalRecord'
import NavBar from './NavBar'
import "./style.css"

const Main = () => {
  return (
    <>
    <div className="MainComp">
      <NavBar/>
      <MedicalRecord />
    </div>
    </>
  )
}

export default Main