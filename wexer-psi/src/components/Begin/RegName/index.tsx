import { Link } from "react-router-dom";
import ButtonNext from "../../../reusable/Buttons/ButtonNext";
import { useState } from "react";

const RegName = () => {
  const initialUser = {
    name: '',
    email: ''
  }
  const [user, setUser] = useState(initialUser)

  const keepUserData = () => {
    localStorage.setItem('newUser_name_email', JSON.stringify(user))
  }

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
                <input className="inputLogin" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} type="text" />
              </label>
            </div>
            <div>
              <label className="flexCol blackColor">
                Email
                <input className="inputLogin" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type="text" />
              </label>
            </div>
            <div className="buttonLine">
              <Link to={"/registo-senha"}><ButtonNext onClick={keepUserData}/></Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default RegName;
