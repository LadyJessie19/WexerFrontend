const Login = () => {
  return (
    <>
      <div className="whiteBack">
        <main>
          <div id="logoSpace">
            <img src="/login/greyLogo.svg" />
            <h3>Seja bem-vindo(a)!</h3>
            <p>Preencha os campos para se cadastrar</p>
          </div>
          <div id="inputSpace">
            <div>
              <label>
                Nome
                <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Email
                <input type="text" />
              </label>
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
