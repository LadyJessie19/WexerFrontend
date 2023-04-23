import { useState } from "react"
import SideBar from "../../SideBar"
import InfoSide from "./InfoSide"
import MedicalRecordSide from "./MedicalRecordSide"
import SearchBar from "./SearchBar"
import '../style.css'
import MainBar from "../../MainBar"
import '../../../reusable/Buttons/styleButtons.css'

const MedicalRecord = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  const handleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <>
        <SideBar menuOpen={menuOpen} setMenuOpen={handleMenu} />
        <MainBar menuHandle={handleMenu}/>
        <div id="compMedicalRecord">
          <SearchBar />
          <div id="compMedRecSplited">
            <InfoSide />
            <MedicalRecordSide />
          </div>
        </div>
    </>
  )
}

export default MedicalRecord