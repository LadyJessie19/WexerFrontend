import QuestionCard from "../QuestionCard";
import SpecialRadio from "../SpecialRadio";

const SectionHealth = () => {
  const options = [
    "Visual",
    "Fala",
    "Auditiva",
    "Física",
    "Não"
  ]
  return (
    <>
      <div className="headerSection">
        <h4>Saúde</h4>
      </div>
      <hr />
      <div className="questionsSection">
        <QuestionCard
          radioInput={true}
          firstQuestion="23 - Tem ou já teve problema de saúde com necessidade de acompanhamento médico/psicológico?"
          extraInput={true}
          secondQuestion="Qual?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="24 - Faz uso de medicamentos?"
          extraInput={true}
          secondQuestion="Qual (is)?"
        />
        <SpecialRadio 
          firstQuestion="25 -Possui deficiência? "
          arrayOptions={options}
          extraInput={true}
          secondQuestion="Qual?"
        />
        <QuestionCard radioInput={true} firstQuestion="26 - Sente desmaios, tontura, mal estar, dores de cabeça constantes, crises convulsivas? " extraInput={false}/>
        <QuestionCard radioInput={true} firstQuestion="27 - Já sofreu algum acidente, tombo, fratura, pancada na cabeça?" extraInput={false}/>
        <QuestionCard radioInput={true} firstQuestion=" 28 - Pratica alguma atividade física?" extraInput={true} secondQuestion="Quais?"/>
      </div>
    </>
  );
};

export default SectionHealth;
