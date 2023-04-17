import Menu from './Menu';
import './style.css'

const MainBar = () => {
  return (
    <>
      <header>
        <div id='leftMainBar'>
         <span><Menu/></span>
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
