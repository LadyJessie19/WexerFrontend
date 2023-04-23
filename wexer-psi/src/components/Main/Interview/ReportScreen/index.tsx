import { useState } from "react"
import MainBar from "../../../MainBar"
import SideBar from "../../../SideBar"
import HeaderInterview from "../InterviewComps/HeaderInterview"
import SeveralTextFields from "../InterviewComps/SeveralTextFields"

const ReportScreen = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  const handleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <>
        <SideBar menuOpen={menuOpen} setMenuOpen={handleMenu} />
        <MainBar menuHandle={handleMenu}/>
        <div className="outerComp">
        <HeaderInterview title="Laudos" buttons={true} backPath='/entrevista'/>
        <SeveralTextFields backPath='/entrevista'/>
        </div>
    </>
  )
}

export default ReportScreen