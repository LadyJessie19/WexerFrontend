const Registration = () => {
  return (
    <>
        <div id="registrationBack">
            <div id="regHeader">
                <img src="/login/regLogo.svg"/>
                <span>Seja bem-vindo(a)!</span>
            </div>
            <div>
                <p>Complete os seus dados</p>
                <hr />
            </div>
            <div id="inputRegSpace">
                <div className="inputRegLine">
                    <div>
                        <label>
                            Nome
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email
                            <input type="text" />
                        </label>
                    </div>
                </div>
                <div className="inputRegLine">
                    <div >
                        <label>
                            CPF
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Telefone
                            <input type="text" />
                        </label>
                    </div>
                </div>
                <div className="inputRegLine">
                    <div >
                        <label>
                            Documento Profissional (CRP)
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Sexo/Gênero
                            <select>
                                <option value="F" selected>Feminino</option>
                                <option value="M">Masculino</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <p>Preencha os dados da clínica</p>
                <hr />
            </div>
            <div className="inputRegSpace">
                <div className="inputRegLine">
                    <div >
                        <label>
                            Nome da clínica
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            CEP
                            <input type="text" />
                        </label>
                    </div>
                </div>
                <div className="inputRegLine">
                    <div >
                        <label>
                            Rua
                            <input type="text" />
                        </label>
                    </div>
                    <div className="dFlexRow">
                        <label className="labelShort">
                            Numero
                            <input type="text" className="inputShort"/>
                        </label>
                        <label className="labelShort">
                            Bairro
                            <input type="text"  className="inputShort"/>
                        </label>
                    </div>
                </div>
                <div className="inputRegLine">
                    <div >
                        <label>
                            Cidade
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Estado
                            <input type="text" />
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <p>Crie uma senha segura</p>
                <hr />
            </div>
            <div className="inputRegSpace">
                <div className="inputRegLine">
                    <div >
                        <label>
                            Senha
                            <input type="password" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Confirmar
                            <input type="text" />
                        </label>
                    </div>
                </div>
                <div className="inputRegLine margin-top">
                    <div>
                        <button>Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Registration