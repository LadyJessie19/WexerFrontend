import EvalFieldsHeader from "./EvalFieldsHeader";
import EvalFieldsQuestions from "./EvalFieldsQuestions";
import EvalFieldsFooter from "./EvalFieldsFooter";
import "../style.css";
import BackToTop from "../../MedicalRecord/MedicalRecordSide/BackToTop";

const EvaluationFields = () => {
  return (
    <div id="sectionEval">
      <div className="backScreen">
        <EvalFieldsHeader />
        <EvalFieldsQuestions />
        <EvalFieldsFooter />
      </div>
        <BackToTop />
    </div>
  );
};

export default EvaluationFields;
