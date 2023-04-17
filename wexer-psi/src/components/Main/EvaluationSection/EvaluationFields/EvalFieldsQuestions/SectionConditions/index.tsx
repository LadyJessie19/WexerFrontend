import QuestionCard from "../QuestionCard";

const SectionConditions = () => {
  return (
    <>
      <div className="headerSection">
        <h4>Condições para realização da avaliação</h4>
      </div>
      <hr />
      <div className="questionsSection">
        <QuestionCard
          radioInput={true}
          firstQuestion="01 - Está descansado hoje?"
          extraInput={true}
          secondQuestion="Por quê?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="02 - Dormiu bem esta noite?"
          extraInput={true}
          secondQuestion="Quantas horas?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="03 - Está alimentado?"
          extraInput={false}
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="04 - Fez uso de bebida alcoólica nas últimas horas?"
          extraInput={false}
        />
        <QuestionCard
          radioInput={true}
          firstQuestion=" 05 - Fez uso de alguma medicação ontem/hoje?"
          extraInput={true}
          secondQuestion="Qual (is)?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="06 - Faz uso de lentes corretivas/óculos? "
          extraInput={false}
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="07 - Considera-se em boas condições para realização da avaliação psicológica?"
          extraInput={true}
          secondQuestion="Por quê?"
        />
        {/* <QuestionCard firstQuestion="" extraInput={true} secondQuestion=""/> */}
      </div>
    </>
  );
};

export default SectionConditions;
