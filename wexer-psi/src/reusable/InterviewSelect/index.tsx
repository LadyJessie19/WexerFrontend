import "../style.css";

const InterviewSelect = () => {
  return (
    <div id="interviewSelect">
      <label htmlFor="interviewType">Selecione o tipo de entrevista</label>
      <br />
      <select name="interviewType" id="interviewType" className="selectType">
        <option value="default" selected hidden>
          Tipo de entrevistas
        </option>
        <option value="renewing">
          Entrevista psicológica para renovação de CNH
        </option>
        <option value="gathering">
          Entrevista psicológica para obtenção de CNH
        </option>
      </select>
    </div>
  );
};

export default InterviewSelect;
