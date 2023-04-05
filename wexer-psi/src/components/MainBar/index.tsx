import './style.css'

const MainBar = () => {
  return (
    <>
      <header>
        <div id='leftMainBar'>
         <img src="/react.svg" width={'50px'}/>
         <span>Voltar para Home</span>
        </div>
        <div id='rightMainBar'>
         <span>Bem vindo(a), Daniel</span>
         <img src="/react.svg" width={'20px'} />
        </div>
      </header>
    </>
  );
};

export default MainBar;
