import { Link } from 'react-router-dom';
import './style.css'

const MainBar = ({menuHandle}:any) => {
  return (
    <>
      <header>
        <div id='leftMainBar'>
         <span>
          <img src="/main-bar/menu.svg" width={'32px'} onClick={menuHandle}/>
          </span>
         <Link to="/home"><span>Voltar para Home</span></Link>
        </div>
        <div id='rightMainBar'>
         <Link to="/"><span>Bem vindo(a), <strong>Daniel</strong></span></Link>
         <img src="/main-bar/Mask.svg" width={'16px'} />
        </div>
      </header>
    </>
  );
};

export default MainBar;
