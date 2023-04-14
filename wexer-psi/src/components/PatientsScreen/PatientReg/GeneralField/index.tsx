const GeneralField = () => {
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
                <div className="inputSolo">
                    <label>Nacionalidade</label>
                    <input type="text" />
                </div>
            </div>
            <div className="inputsLine">
                <div className="inputSolo">
                <label>Naturalidade</label>
                    <input type="text" />
                </div>
                <div className="inputSolo">
                <label>Profissão</label>
                    <input type="text" />
                </div>
                <div className="inputSolo">
                    <label>Escolaridade</label>
                    <input type="text" />
                </div>
            </div>
            <div className="inputsLine">
                <div className="inputSolo">
                <label>Estado Civil</label>
                    <input type="text" />
                </div>
                <div className="inputSolo">
                <label>Mãe</label>
                    <input type="text" />
                </div>
                <div className="inputSolo">
                    <label>Pai</label>
                    <input type="text" />
                </div>
            </div>
        </div>
    </>
  )
}

export default GeneralField