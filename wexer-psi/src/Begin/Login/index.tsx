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
              <label>
                Login
                <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Senha
                <input type="text" />
              </label>
            </div>
            <div>
              <small>Esqueci a senha</small>
            </div>
            <div>
              <button>Entrar</button>
            </div>
            <div>
              <p>Cadastre-se gratuitamente</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Login