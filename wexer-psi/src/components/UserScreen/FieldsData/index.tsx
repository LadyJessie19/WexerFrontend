import ButtonSave from "../../../reusable/Buttons/ButtonSave"

const FieldsData = () => {
    return (
      <>
          <div id="inputsGeneral">
              <div className="inputsLine">
                  <div className="inputSolo">
                  <label>Nome</label>
                      <input type="text" />
                  </div>
                  <div className="inputSolo">
                  <label>Email</label>
                      <input type="text" />
                  </div>
                  <div className="inputSolo">
                      <label>CPF</label>
                      <input type="text" />
                  </div>
                  <div className="inputSolo">
                      <label>Telefone</label>
                      <input type="text" />
                  </div>
              </div>
              <div className="inputsLine">
                  <div className="inputSolo">
                  <label>Documento Profissional</label>
                      <input type="text" />
                  </div>
                  <div className="inputSolo">
                  <label>Sexo/Gênero</label>
                      <input type="text" />
                  </div>                
                  <ButtonSave />
              </div>
          </div>
      </>
    )
  }
  
  export default FieldsData