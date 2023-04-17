const FieldsData = () => {
    return (
      <>
          <div id="inputsGeneral">
              <div className="inputsLine">
                  <div className="inputSolo">
                  <label>CPF</label>
                      <input type="text" />
                  </div>
                  <div className="inputSolo">
                  <label>Nome</label>
                      <input type="text" />
                  </div>
                  <div className="inputSolo">
                      <label>Data de nascimento</label>
                      <input type="text" />
                  </div>
              </div>
              <div className="inputsLine">
                  <div className="inputSolo">
                  <label>Email</label>
                      <input type="text" />
                  </div>
                  <div className="inputSolo">
                  <label>Sexo/Gênero</label>
                      <input type="text" />
                  </div>
                  <button>Salvar</button>
              </div>
          </div>
      </>
    )
  }
  
  export default FieldsData