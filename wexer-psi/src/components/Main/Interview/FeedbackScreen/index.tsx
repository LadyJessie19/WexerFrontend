import { useState } from "react"
import MainBar from "../../../MainBar"
import SideBar from "../../../SideBar"
import BodyInterview from "../InterviewComps/BodyInterview"
import HeaderInterview from "../InterviewComps/HeaderInterview"

const FeedbackScreen = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  const handleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <>
        <SideBar menuOpen={menuOpen} setMenuOpen={handleMenu} />
        <MainBar menuHandle={handleMenu}/>
        <div className="outerComp">
          <HeaderInterview title="Devolutiva" buttons={false}/>
          <BodyInterview title="Declaração" backPath="/entrevista"/>
        </div>
    </>
  )
}

export default FeedbackScreen