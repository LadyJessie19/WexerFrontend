import FooterInterview from "../FooterInterview"
import TextAreaComp from "../TextAreaComp"

type PropsComp = {
  title:string;
}

const BodyInterview = ({title}:PropsComp) => {
  return (
    <>
        <div className="innerBodyInterview">
            <TextAreaComp title={title}/>
            <FooterInterview />
        </div>
    </>
  )
}

export default BodyInterview