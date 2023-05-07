import { useState } from "react"
import SideBar from "../../SideBar"
import MainBar from "../../MainBar"

import InfoSide from "./InfoSide"
import SearchBar from "./SearchBar"
import MedicalRecordSide from "./MedicalRecordSide"

import '../style.css'
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
        <div id="totop"></div>
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