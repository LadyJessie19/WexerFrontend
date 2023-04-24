import { Link } from "react-router-dom"
import ButtonNewReg from "../../../reusable/Buttons/ButtonNewReg"

const Registration = () => {
  return (
    <>
        <div id="registrationBack">
            <div id="regHeader">
                <img src="/login/regLogo.svg"/>
                <span className="whiteColor">Seja bem-vindo(a)!</span>
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
                            <input value="Daniel" type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email
                            <input value="daniel@gmail.com" type="text" />
                        </label>
                    </div>
                </div>
                <div className="inputRegLine">
                    <div >
                        <label>
                            CPF
                            <input value="132.655.595.466" type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Telefone
                            <input value="(31)" type="text" />
                        </label>
                    </div>
                </div>
                <div className="inputRegLine">
                    <div >
                        <label>
                            Documento Profissional (CRP)
                            <input value="464654165196514" type="text" />
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
                            <input value="Talita Rodrigues" type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            CEP
                            <input value="32681779" type="text" />
                        </label>
                    </div>
                </div>
                <div className="inputRegLine">
                    <div >
                        <label>
                            Rua
                            <input value="Flores" type="text" />
                        </label>
                    </div>
                    <div className="dFlexRow">
                        <label className="labelShort">
                            Numero
                            <input value="25" type="text" className="inputShort"/>
                        </label>
                        <label className="labelShort">
                            Bairro
                            <input type="text" value="Alterosa" className="inputShort"/>
                        </label>
                    </div>
                </div>
                <div className="inputRegLine">
                    <div >
                        <label>
                            Cidade
                            <input value="Betim" type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Estado
                            <input value="Minas Gerais" type="text" />
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
                            <input value="********" type="password" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Confirmar
                            <input value="********" type="text" />
                        </label>
                    </div>
                </div>
                <div className="inputRegLine margin-top">
                    <div className="backGreen">
                        <Link to={"/home"}><ButtonNewReg lightTheme={true}/></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Registration