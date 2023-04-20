import BodyInterview from "../InterviewComps/BodyInterview"
import HeaderInterview from "../InterviewComps/HeaderInterview"

const FeedbackScreen = () => {
  return (
    <>
        <HeaderInterview title="Devolutiva" buttons={false}/>
        <BodyInterview title="Declaração" />
    </>
  )
}

export default FeedbackScreen