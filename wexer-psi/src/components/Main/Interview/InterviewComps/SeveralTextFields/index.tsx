import FooterInterview from "../FooterInterview"
import TextAreaComp from "../TextAreaComp"

const BodyInterview = () => {
  return (
    <>
        <div className="innerBodyInterview">
            <TextAreaComp title='I - Identificação'/>
            <TextAreaComp title='II - Descrição da demanda'/>
            <TextAreaComp title='III - Procedimento'/>
            <TextAreaComp title='IV - Análise'/>
            <TextAreaComp title='V - Conclusão'/>
            <FooterInterview />
        </div>
    </>
  )
}

export default BodyInterview