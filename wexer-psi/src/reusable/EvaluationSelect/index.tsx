import "../style.css";

const EvaluationSelect = () => {
  return (
    <div>
      <label htmlFor="interviewType">Selecione o tipo de teste</label>
      <br />
      <select name="interviewType" id="interviewType" className="selectType">
        <option value="default" selected hidden>
          Tipo de teste
        </option>
        <option value="teste1">
          Tipo de teste 1
        </option>
        <option value="teste2">
          Tipo de teste 2
        </option>
        <option value="teste3">
          Tipo de teste 3
        </option>
        <option value="teste4">
          Tipo de teste 4
        </option>
        <option value="teste5">
          Tipo de teste 5
        </option>
        <option value="teste6">
          Tipo de teste 6
        </option> 
      </select>
    </div>
  );
};

export default EvaluationSelect;
