import FooterInterview from "../FooterInterview"
import TextAreaComp from "../TextAreaComp"

type PropsComp = {
  title:string,
  backPath:string
}

const BodyInterview = ({title, backPath}:PropsComp) => {
  return (
    <>
        <div className="innerBodyInterview">
            <TextAreaComp title={title}/>
            <FooterInterview backPath={backPath} />
        </div>
    </>
  )
}

export default BodyInterview