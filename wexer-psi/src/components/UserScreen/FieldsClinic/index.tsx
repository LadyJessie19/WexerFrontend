import ButtonSave from "../../../reusable/Buttons/ButtonSave";

const FieldsClinic = () => {
  return (
    <>
      <div id="inputsGeneral">
        <div className="inputsLine">
          <div className="inputSolo">
            <label>Nome da clínica</label>
            <input type="text" />
          </div>
          <div className="inputSolo">
            <label>CEP</label>
            <input type="text" />
          </div>
          <div className="inputSolo">
            <label>Rua</label>
            <input type="text" />
          </div>
          <div className="inputSolo">
            <label>Número</label>
            <input type="text" />
          </div>
        </div>
        <div className="inputsLine">
          <div className="inputSolo">
            <label>Bairro</label>
            <input type="text" />
          </div>
          <div className="inputSolo">
            <label>Cidade</label>
            <input type="text" />
          </div>
          <div className="inputSolo">
            <label>Estado</label>
            <input type="text" />
          </div>
          <ButtonSave />
        </div>
      </div>
    </>
  );
};

export default FieldsClinic;
