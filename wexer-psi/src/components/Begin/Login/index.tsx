import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
        <div id="loginScreen">
        <main>
          <div id="logoSpace">
            <img src="/login/wexerLogo.svg" />
          </div>
          <div id="inputSpace">
            <div>
              <label className="flexCol whiteColor">
                Login
                <input className="inputLogin" value='daniel.silva@wexer.com.br' type="text" />
              </label>
            </div>
            <div>
              <label className="flexCol whiteColor">
                Senha
                <input className="inputLogin" value="****************" type="text" />
              </label>
            </div>
            <div className="forgotPassDiv">
              <small className="forgotPassword">Esqueci a senha</small>
            </div>
            <div>
              <button className="buttonLogin"><Link to="/home">Entrar</Link></button>
            </div>
            <div>
              <p className="whiteColor"><Link to="/registo-nome"> Cadastre-se gratuitamente</Link></p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Login