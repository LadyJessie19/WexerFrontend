import { useState } from "react"
import BodyInterview from "../InterviewComps/BodyInterview"
import HeaderInterview from "../InterviewComps/HeaderInterview"
import SideBar from "../../../SideBar"
import MainBar from "../../../MainBar"

type PropsComp = {
  compTitle:string,
  backPath:string
}

const SimpleScreen = ({compTitle, backPath}:PropsComp) => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  const handleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <>
        <SideBar menuOpen={menuOpen} setMenuOpen={handleMenu} />
        <MainBar menuHandle={handleMenu}/>
        <div className="outerComp">
          <HeaderInterview title={compTitle} buttons={true} backPath={backPath}/>
          <BodyInterview title={compTitle} backPath={backPath}/>
        </div>
    </>
  )
}

export default SimpleScreen