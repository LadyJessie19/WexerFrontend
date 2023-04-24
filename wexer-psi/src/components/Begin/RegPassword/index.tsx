import { Link } from "react-router-dom";
import ButtonNext from "../../../reusable/Buttons/ButtonNext";

const RegPassword = () => {
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
                  <input className="inputLogin" type="password" />
                </label>
              </div>
              <div>
                <label className="flexCol blackColor">
                  Confirmar senha
                  <input className="inputLogin" type="password" />
                </label>
              </div>
              <div id="infoPassword">
                <small>*Precisa no mínimo 8 digitos</small>
                <small>*Precisa conter um caractere especial */+.</small>
                <small>*Precisa conter uma letra em MAIÚSCULA</small>
              </div>
              <div className="buttonLine">
                <Link to="/registo-info"><ButtonNext /></Link>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  };
  
  export default RegPassword;
  