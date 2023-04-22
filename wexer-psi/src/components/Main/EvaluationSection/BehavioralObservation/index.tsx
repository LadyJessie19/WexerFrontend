import { useState } from "react"
import MainBar from "../../../MainBar"
import SideBar from "../../../SideBar"
import MainBarEvaluation from "../MainBarEvaluation"
import BehObsBody from "./BehObsBody"
import BehObsHeader from "./BehObsHeader"

const BehavioralObservation = () => {

  const [menuOpen, setMenuOpen] = useState(false)

    const menuHandle = () => {
      setMenuOpen(!menuOpen)
    }

  return (
    <>
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MainBar menuHandle={menuHandle}/>
      <div className="sectionEval">
        <MainBarEvaluation />
        <div className="backScreen">
          <BehObsHeader />
          <hr />
          <BehObsBody />
        </div>
      </div>
    </>
  )
}

export default BehavioralObservation