import BodyInterview from "../InterviewComps/BodyInterview"
import HeaderInterview from "../InterviewComps/HeaderInterview"

type PropsComp = {
  compTitle:string;
}

const SimpleScreen = ({compTitle}:PropsComp) => {
  return (
    <>
        <HeaderInterview title={compTitle} buttons={true}/>
        <BodyInterview title={compTitle} />
    </>
  )
}

export default SimpleScreen