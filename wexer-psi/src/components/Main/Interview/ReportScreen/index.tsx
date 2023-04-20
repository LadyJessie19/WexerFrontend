import HeaderInterview from "../InterviewComps/HeaderInterview"
import SeveralTextFields from "../InterviewComps/SeveralTextFields"

const ReportScreen = () => {
  return (
    <>
        <HeaderInterview title="Laudos" buttons={true}/>
        <SeveralTextFields />
    </>
  )
}

export default ReportScreen