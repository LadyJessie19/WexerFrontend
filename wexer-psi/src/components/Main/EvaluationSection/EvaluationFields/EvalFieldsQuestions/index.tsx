import EvalFieldsSynthesis from "./EvalFieldsSynthesis"
import SectionComplements from "./SectionComplements"
import SectionConditions from "./SectionConditions"
import SectionFamily from "./SectionFamily"
import SectionHabits from "./SectionHabits"
import SectionHealth from "./SectionHealth"
import SectionProfession from "./SectionProfession"
import SectionSchool from "./SectionSchool"

const EvalFieldsQuestions = () => {
  return (
    <>
        <hr />
        <EvalFieldsSynthesis />
        <SectionConditions/>
        <SectionFamily />
        <SectionProfession />
        <SectionSchool />
        <SectionHealth />
        <SectionHabits />
        <SectionComplements />
    </>
  )
}

export default EvalFieldsQuestions