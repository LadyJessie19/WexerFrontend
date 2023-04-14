const Login = () => {
    return (
      <>
        <div className="whiteBack">
          <main>
            <div id="logoSpace">
              <img src="/login/greyLogo.svg" />
              <h3>Seja bem-vindo(a)!</h3>
              <p>Escolha uma senha</p>
            </div>
            <div id="inputSpace">
              <div>
                <label>
                  Senha
                  <input type="password" />
                </label>
              </div>
              <div>
                <label>
                  Confirmar senha
                  <input type="password" />
                </label>
              </div>
              <div id="infoPassword">
                <small>*Precisa no mínimo 8 digitos</small>
                <small>*Precisa conter um caractere especial */+.</small>
                <small>*Precisa conter uma letra em MAIÚSCULA</small>
              </div>
              <div>
                <button>Prosseguir</button>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  };
  
  export default Login;
  