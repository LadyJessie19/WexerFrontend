import { Link } from "react-router-dom";
import ButtonNext from "../../../reusable/Buttons/ButtonNext";

const RegName = () => {
  return (
    <>
      <img src="/login/logo.svg" id="wexerLogoBack" />
      <div className="whiteBack">
        <main>
          <div id="logoSpace">
            <img src="/login/greyLogo.svg" />
            <h3>Seja bem-vindo(a)!</h3>
            <p>Preencha os campos para se cadastrar</p>
          </div>
          <div id="inputSpace">
            <div>
              <label className="flexCol blackColor">
                Nome
                <input className="inputLogin" value="Daniel Silva" type="text" />
              </label>
            </div>
            <div>
              <label className="flexCol blackColor">
                Email
                <input className="inputLogin" value="daniel.wexer@wexer.com.br" type="text" />
              </label>
            </div>
            <div className="buttonLine">
              <Link to={"/registo-senha"}><ButtonNext /></Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default RegName;
