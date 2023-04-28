import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { getData } from "../../../services/functions"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  /* email: daniel.silva@wexer.com.br */
  /* password: ************* */

  /* const logUser = async () => {
      const info = await getData();
      const emailInfo = info.data.email
      const passwordInfo = String(info.data.exp)
      localStorage.setItem('user', JSON.stringify(info.data))
      if(emailInfo === email && passwordInfo === password){
        navigate("/home")
      } else{
        setError(true)
      }
    } */
  const logUser = () => {
      const info = JSON.parse(localStorage.getItem('user'));
      const emailInfo = info.email
      const passwordInfo = info.password
      if(emailInfo === email && passwordInfo === password){
        navigate("/home")
      } else{
        setError(true)
      }
    }

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
                <input className="inputLogin" onChange={(e) => setEmail(e.target.value)} value={email} type="text" />
              </label>
            </div>
            <div>
              <label className="flexCol whiteColor">
                Senha
                <input className="inputLogin" onChange={(e) => setPassword(e.target.value)} value={password} type="text" />
              </label>
            </div>
            <div className="forgotPassDiv">
              <small className="forgotPassword">Esqueci a senha</small>
            </div>
            <div>
              {error && <small className="smallRed">Email ou senha incorretos!</small>}
            </div>
            <div>
              <button className="buttonLogin" onClick={logUser}>Entrar</button>
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