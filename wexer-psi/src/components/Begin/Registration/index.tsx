import { useNavigate } from "react-router-dom";
import ButtonNewReg from "../../../reusable/Buttons/ButtonNewReg";
import { useEffect, useState } from "react";
import { postUser } from "../../../services/functions";

const Registration = () => {
  const userRegSheet = {
    name: "",
    email: "",
    cpf: "12312312345",
    phone: "3434343434",
    crp: "987654321",
    gender: "M",
    clinicName: "teste",
    cep: "4565456",
    street: "teste",
    number: "12",
    neighborhood: "teste",
    city: "teste",
    state: "teste",
    password: "",
    passConfirm: "",
    idT: "testeeo"
  };
  const [user, setUser] = useState(userRegSheet);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const fillUserData = () => {
    const parsedData = JSON.parse(localStorage.getItem("newUser_name_email") ?? "null");
    const objName = parsedData?.name ?? null;
    const objEmail = parsedData.email;
    const objPassword = JSON.parse(localStorage.getItem("newUser_password") ?? "null");
    setUser({ ...user, name: objName, email: objEmail, password: objPassword });
  };
  
  

  const passChecker = async () => {
  
    if (user.password === user.passConfirm) {
      const postUserNew = await postUser(user)
        .then((response) => {
          const users = response.data;
          localStorage.setItem('user', JSON.stringify(user))
          navigate("/");
        })
        .catch((error) => {
          console.log("Ocorreu um erro na criação", error);
        });
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    return () => fillUserData();
  }, []);

  return (
    <>
      <div id="registrationBack">
        <div id="regHeader">
          <img src="/login/regLogo.svg" />
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
                <input
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  type="text"
                />
              </label>
            </div>
            <div>
              <label>
                Email
                <input
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  type="text"
                />
              </label>
            </div>
          </div>
          <div className="inputRegLine">
            <div>
              <label>
                CPF
                <input
                  value={user.cpf}
                  onChange={(e) => setUser({ ...user, cpf: e.target.value })}
                  type="text"
                />
              </label>
            </div>
            <div>
              <label>
                Telefone
                <input
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  type="text"
                />
              </label>
            </div>
          </div>
          <div className="inputRegLine">
            <div>
              <label>
                Documento Profissional (CRP)
                <input
                  value={user.crp}
                  onChange={(e) => setUser({ ...user, crp: e.target.value })}
                  type="text"
                />
              </label>
            </div>
            <div>
              <label>
                Sexo/Gênero
                <select
                  value={user.gender}
                  onChange={(e) =>
                    setUser({ ...user, gender: e.target.value })
                  }>
                  <option value="F">Feminino</option>
                  <option value="M" selected>
                    Masculino
                  </option>
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
            <div>
              <label>
                Nome da clínica
                <input
                  value={user.clinicName}
                  onChange={(e) =>
                    setUser({ ...user, clinicName: e.target.value })
                  }
                  type="text"
                />
              </label>
            </div>
            <div>
              <label>
                CEP
                <input
                  value={user.cep}
                  onChange={(e) => setUser({ ...user, cep: e.target.value })}
                  type="text"
                />
              </label>
            </div>
          </div>
          <div className="inputRegLine">
            <div>
              <label>
                Rua
                <input
                  value={user.street}
                  onChange={(e) => setUser({ ...user, street: e.target.value })}
                  type="text"
                />
              </label>
            </div>
            <div className="dFlexRow">
              <label className="labelShort">
                Numero
                <input
                  value={user.number}
                  onChange={(e) => setUser({ ...user, number: e.target.value })}
                  type="text"
                  className="inputShort"
                />
              </label>
              <label className="labelShort">
                Bairro
                <input
                  type="text"
                  value={user.neighborhood}
                  onChange={(e) =>
                    setUser({ ...user, neighborhood: e.target.value })
                  }
                  className="inputShort"
                />
              </label>
            </div>
          </div>
          <div className="inputRegLine">
            <div>
              <label>
                Cidade
                <input
                  value={user.city}
                  onChange={(e) => setUser({ ...user, city: e.target.value })}
                  type="text"
                />
              </label>
            </div>
            <div>
              <label>
                Estado
                <input
                  value={user.state}
                  onChange={(e) => setUser({ ...user, state: e.target.value })}
                  type="text"
                />
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
            <div>
              <label>
                Senha
                <input
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  type="password"
                />
              </label>
            </div>
            <div>
              <label>
                Confirmar
                <input
                  value={user.passConfirm}
                  onChange={(e) =>
                    setUser({ ...user, passConfirm: e.target.value })
                  }
                  type="password"
                />
              </label>
            </div>
          </div>
          <br />
          <div>
            {error && (
              <small className="smallRed">As senhas não são iguais!</small>
            )}
          </div>
          <div className="inputRegLine margin-top">
            <div className="backGreen">
              <ButtonNewReg btnFunction={passChecker} lightTheme={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
