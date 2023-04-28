import { Link, useNavigate } from "react-router-dom";
import ButtonNext from "../../../reusable/Buttons/ButtonNext";
import { useState } from "react";

const RegPassword = () => {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const keepUserData = () => {
    localStorage.setItem('newUser_password', JSON.stringify(password))
  }

  const passChecker = () => {
    if(confirm === password){
      keepUserData()
      navigate('/registo-info')
    } else {
      setError(true)
    }
  }
    return (
      <>
        <img src="/login/logo.svg" id="wexerLogoBack" />
        <div className="whiteBack">
          <main>
            <div id="logoSpace">
              <img src="/login/greyLogo.svg" />
              <h3>Seja bem-vindo(a)!</h3>
              <p>Escolha uma senha</p>
            </div>
            <div id="inputSpace">
              <div>
                <label className="flexCol blackColor">
                  Senha
                  <input className="inputLogin" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
              </div>
              <div>
                <label className="flexCol blackColor">
                  Confirmar senha
                  <input className="inputLogin" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
                </label>
              </div>
              <div id="infoPassword">
                <small>*Precisa no mínimo 8 digitos</small>
                <small>*Precisa conter um caractere especial */+.</small>
                <small>*Precisa conter uma letra em MAIÚSCULA</small>
              </div>
              <div>
                {error && <small className="smallRed">As senhas não são iguais!</small>}
              </div>
              <div className="buttonLine">
                {/* <Link to="/registo-info"><ButtonNext /></Link> */}
                <ButtonNext onClick={passChecker}/>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  };
  
  export default RegPassword;
  