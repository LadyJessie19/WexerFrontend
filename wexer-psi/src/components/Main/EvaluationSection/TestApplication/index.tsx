import { useState } from "react";
import MainBarEvaluation from "../MainBarEvaluation";
import TestAppBody from "./TestAppBody";
import TestAppHeader from "./TestAppHeader";
import SideBar from "../../../SideBar";
import MainBar from "../../../MainBar";

const TestApplication = () => {
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
        <TestAppHeader />
        <hr />
        <TestAppBody />
      </div>
    </div>
    </>
  );
};

export default TestApplication;
