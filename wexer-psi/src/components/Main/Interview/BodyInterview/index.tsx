import FooterInterview from "../FooterInterview"
import TextAreaComp from "../TextAreaComp"

type PropsComp = {
    title: string
}

const BodyInterview = ({title}:PropsComp) => {
  return (
    <>
        <div className="innerBodyInterview">
            <div className="textAreaBody">
                <h2>{title}</h2>
            <TextAreaComp />
            </div>
            <FooterInterview />
        </div>
    </>
  )
}

export default BodyInterview