import QuestionCard from "../QuestionCard";

const SectionComplements = () => {
  return (
    <>
      <div className="headerSection">
        <h4>Complementos para atividade remunerada como condutor</h4>
      </div>
      <hr />
      <div className="questionsSection">
        <QuestionCard
          radioInput={true}
          firstQuestion="43 - Já possui experiência como motorista profissional?"
          extraInput={true}
          secondQuestion="Tempo/Carga: "
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="44  - Já passou por alguma situação de perigo no trânsito?"
          extraInput={true}
          secondQuestion="Qual?"
        />
        <QuestionCard
          radioInput={false}
          extraInput={true}
          secondQuestion="45 - Fale sobre uma situação que te deixou mais irritado no trânsito: "
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="46 - Já sofreu acidente de trânsito?"
          extraInput={true}
          secondQuestion="Qual?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="47 - Teve multas, ponto na CNH? "
          extraInput={true}
          secondQuestion="Por quê? "
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="48 - CNH já foi apreendida ou cassada?"
          extraInput={true}
          secondQuestion="Porque/quando?"
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="49 - Usa algum estimulante para dirigir? "
          extraInput={true}
          secondQuestion="Qual?"
        />
        <QuestionCard
          radioInput={false}
          extraInput={true}
          secondQuestion="50 - Quando está dirigindo e recebe uma ligação ou percebe que chegou uma mensagem no celular, como reage?"
        />
        <QuestionCard
          radioInput={false}
          extraInput={true}
          secondQuestion="51 - Quando você é convidado para um evento em que você fará uso de bebida alcoólica, como se organiza, com relação à condução do veículo?"
        />
      </div>
    </>
  );
};

export default SectionComplements;
