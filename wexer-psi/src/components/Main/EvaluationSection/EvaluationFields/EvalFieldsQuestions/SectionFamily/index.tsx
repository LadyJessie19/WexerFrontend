import QuestionCard from "../QuestionCard";
import SpecialRadio from "../SpecialRadio";

const SectionFamily = () => {
  const options = [
    "Divorciado",
    "Viúvo",
    "Solteiro",
    "Casado",
    "União estável",
  ];
  return (
    <>
      <div className="headerSection">
        <h4>Histórico familiar</h4>
      </div>
      <hr />
      <div className="questionsSection">
        <SpecialRadio
          firstQuestion="08 - Estado civil:"
          arrayOptions={options}
          extraInput={false}
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="09 - Possui filhos?"
          extraInput={true}
          secondQuestion="Quantos e qual a idade?"
        />
        <QuestionCard
          radioInput={false}
          extraInput={true}
          secondQuestion="10 - Com quem você mora?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="11 - Está enfrentando problemas familiares? "
          extraInput={true}
          secondQuestion="Quais?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="12 - Possui irmãos?"
          extraInput={true}
          secondQuestion="Quantos?"
        />
        <QuestionCard
          radioInput={false}
          extraInput={true}
          secondQuestion="13 - Como é seu relacionamento com sua família?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="14- Na família existe alguém que necessite de cuidados médicos ou psicológicos? "
          extraInput={true}
          secondQuestion="Nota"
        />
      </div>
    </>
  );
};

export default SectionFamily;
