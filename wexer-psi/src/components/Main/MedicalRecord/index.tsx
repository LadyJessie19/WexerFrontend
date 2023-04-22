import { useState } from "react"
import SideBar from "../../SideBar"
import InfoSide from "./InfoSide"
import MedicalRecordSide from "./MedicalRecordSide"
import SearchBar from "./SearchBar"
import '../style.css'
import MainBar from "../../MainBar"

const MedicalRecord = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  const handleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <>
        <SideBar menuOpen={menuOpen} setMenuOpen={handleMenu} />
        <MainBar menuHandle={handleMenu}/>
        <SearchBar />
        <InfoSide />
        <MedicalRecordSide />
    </>
  )
}

export default MedicalRecord