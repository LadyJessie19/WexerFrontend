import './style.css'

const MainBar = () => {
  return (
    <>
      <header>
        <div id='leftMainBar'>
         <img src="/main-bar/menu.svg" width={'32px'}/>
         <span>Voltar para Home</span>
        </div>
        <div id='rightMainBar'>
         <span>Bem vindo(a), <strong>Daniel</strong></span>
         <img src="/main-bar/Mask.svg" width={'16px'} />
        </div>
      </header>
    </>
  );
};

export default MainBar;
