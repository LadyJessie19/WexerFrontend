import QuestionCard from "../QuestionCard";
import SpecialRadio from "../SpecialRadio";

const SectionProfession = () => {
  const options = [
    "Aposentado",
    "Desempregado",
    "Nunca trabalhou",
    "Está Trabalhando",
  ];
  const options2 = [
    "Diurno",
    "Noturno",
    "Rodizio de turnos Horário:"
  ]
  return (
    <>
      <div className="headerSection">
        <h4>Vida profissional</h4>
      </div>
      <hr />
      <div className="questionsSection">
        <SpecialRadio
          firstQuestion="Atualmente:"
          arrayOptions={options}
          extraInput={false}
        />
        <QuestionCard
          radioInput={false}
          extraInput={true}
          secondQuestion="16 - Função desempenhada? Há quanto tempo?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="17 - Está satisfeito com o que faz?"
          extraInput={true}
          secondQuestion="Por quê?"
        />
        <SpecialRadio
        firstQuestion="18 - Trabalha em que turno? "
        arrayOptions={options2}
        extraInput={true}
        secondQuestion="Nota"/>
      </div>
        <QuestionCard
          radioInput={true}
          firstQuestion="19 - Está afastado pelo INSS? "
          extraInput={true}
          secondQuestion="Por qual motivo?"
        />
    </>
  );
};

export default SectionProfession;
