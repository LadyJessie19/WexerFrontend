import QuestionCard from "../QuestionCard";
import SpecialRadio from "../SpecialRadio";

const SectionSchool = () => {
  const options = [
    "Superior incompleto",
    "Superior completo",
    "Médio incompleto",
    "Médio completo",
    "Fundamental incompleto",
    "Fundamental completo",
    "Primário",
    "Alfabetizado"
  ]
  const options2 = [
    "Regular",
    "Supletivo",
    "A distâcia"
  ]
  return (
    <>
      <div className="headerSection">
        <h4>Vida escolar</h4>
      </div>
      <hr />
      <div className="questionsSection">
        <SpecialRadio
          firstQuestion="20 - Escolaridade:"
          arrayOptions={options}
          extraInput={false}
        />
        <QuestionCard
          radioInput={true}
          firstQuestion="21 - Está estudando?"
          extraInput={true}
          secondQuestion="Parou há quanto tempo? "
        />
        <SpecialRadio
          firstQuestion="22 - Ensino:"
          arrayOptions={options2}
          extraInput={true}
          secondQuestion="Nota"
        />
        {/* <QuestionCard firstQuestion="" extraInput={true} secondQuestion=""/> */}
      </div>
    </>
  );
};

export default SectionSchool;