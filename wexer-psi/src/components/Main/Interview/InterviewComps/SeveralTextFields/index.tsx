import FooterInterview from "../FooterInterview"
import TextAreaComp from "../TextAreaComp"

type PropsBodyInt = {
  backPath:string,
}

const BodyInterview = ({backPath}:PropsBodyInt) => {
  return (
    <>
        <div className="innerBodyInterview">
            <TextAreaComp title='I - Identificação'/>
            <TextAreaComp title='II - Descrição da demanda'/>
            <TextAreaComp title='III - Procedimento'/>
            <TextAreaComp title='IV - Análise'/>
            <TextAreaComp title='V - Conclusão'/>
            <FooterInterview backPath={backPath}/>
        </div>
    </>
  )
}

export default BodyInterview