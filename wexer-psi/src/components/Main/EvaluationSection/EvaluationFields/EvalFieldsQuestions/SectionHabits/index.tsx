import QuestionCard from "../QuestionCard";

const SectionHabits = () => {
  return (
    <>
      <div className="headerSection">
        <h4>Hábitos e conduta social</h4>
      </div>
      <hr />
      <div className="questionsSection">
        <QuestionCard
          radioInput={true}
          firstQuestion="29 - Faz uso de cigarros? 	"
          extraInput={true}
          secondQuestion="Quantos por dia?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion=" 30 - É ex-fumante? "
          extraInput={true}
          secondQuestion="Há quanto tempo?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="31 - Faz ingestão de café? "
          extraInput={true}
          secondQuestion="Frequência:"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="32 - Faz uso de bebida alcoólica?"
          extraInput={true}
          secondQuestion="Quantidade/frequência:	"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion=" 33 - Já usou ou usa algum tipo de droga? "
          extraInput={true}
          secondQuestion="Qual/frequência: "
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="34 - Faz/fez tratamento para deixar de usar? "
          extraInput={true}
          secondQuestion="Por quê?"
        />
        <QuestionCard
          radioInput={false}
          extraInput={true}
          secondQuestion="35 - Quais são suas atividades de lazer, hobbies?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="36 - Pratica alguma religião? "
          extraInput={true}
          secondQuestion="Qual/frequência:"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="37 - Houve alguma mudança na sua rotina nas últimas semanas?"
          extraInput={true}
          secondQuestion="Nota"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="38 - Possui antecedente penal/criminal? "
          extraInput={false}
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="39 - Já teve passagem pela delegacia? "
          extraInput={true}
          secondQuestion="Nota"
        />
        <QuestionCard
          radioInput={false}
          firstQuestion=""
          extraInput={true}
          secondQuestion="40 - Qual a sua meta de vida?"
        />
        <QuestionCard
          radioInput={false}
          extraInput={true}
          secondQuestion="41 - Fale sobre você: 1 ponto positivo e 1 ponto negativo: "
        />
        <QuestionCard
          radioInput={false}
          extraInput={true}
          secondQuestion="42 - Sugestão para redução de acidentes no trânsito: "
        />
      </div>
    </>
  );
};

export default SectionHabits;