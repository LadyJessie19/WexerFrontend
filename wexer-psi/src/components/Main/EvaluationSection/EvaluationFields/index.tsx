import EvalFieldsHeader from "./EvalFieldsHeader";
import EvalFieldsQuestions from "./EvalFieldsQuestions";
import EvalFieldsFooter from "./EvalFieldsFooter";
import "../style.css";
import BackToTop from "../../MedicalRecord/MedicalRecordSide/BackToTop";
import MainBarEvaluation from "../MainBarEvaluation";
import SideBar from "../../../SideBar";
import MainBar from "../../../MainBar";
import { useState } from "react";

const EvaluationFields = () => {
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
        <EvalFieldsHeader />
        <EvalFieldsQuestions />
        <EvalFieldsFooter />
      </div>
        <BackToTop />
    </div>
    </>
  );
};

export default EvaluationFields;
