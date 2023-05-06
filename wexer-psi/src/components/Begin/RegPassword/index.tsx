import { useNavigate } from "react-router-dom";
import ButtonNext from "../../../reusable/Buttons/ButtonNext";
import { useState } from "react";

const RegPassword = () => {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  
  // const [error, setError] = useState(false)
  const [ruleError, setRuleError] = useState(false)

  const navigate = useNavigate()

  const keepUserData = () => {
    localStorage.setItem('newUser_password', JSON.stringify(password))
  }

  const regexCaps = (key:string) => {
    return /[A-Z]/.test(key);
  }
  const regexSpecial = (key:string) => {
    return /[\W_]/.test(key);
  }

  const passChecker = () => {
    if(confirm === password && password.length > 7 && regexCaps(password) && regexSpecial(password)){
        keepUserData()
        navigate('/registo-info')
    }else {
      setRuleError(true)
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
                {/* {error && <small className="smallRed">As senhas não atendem aos requisitos necessários</small>} */}
                {ruleError && <small className="smallRed">As senhas não atendem aos requisitos necessários</small>}
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
  