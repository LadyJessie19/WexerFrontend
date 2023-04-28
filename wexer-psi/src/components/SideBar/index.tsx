import Dropdown from "../../reusable/DropdownList";
import "./style.css";
import { Link } from "react-router-dom";

type PropsSideBar = {
  menuOpen: boolean;
  setMenuOpen: () => void;
}

const SideBar = ({ menuOpen, setMenuOpen }:PropsSideBar) => {
  const menuHandle = () => {
    setMenuOpen(!menuOpen);
   } 

   const itemsModel = [
    {id: 1,
    label: 'Entrevistas'},
    {id: 2,
    label: 'Roteiro de testes'},
    {id: 3,
    label: 'Documentos'}
   ]

   const itemsRegister = [
    {id: 1,
    label: 'Perguntas'},
    {id: 2,
    label: 'Testes'},
    {id: 3,
    label: 'Tipo de avaliações'}
   ]
  return (
    <>
      {menuOpen ? (
        <nav className="largeMenu">
          <div className="topNavBar">
            <img src="/side-bar/logo.svg" />
            <span onClick={menuHandle}>fechar menu</span>
          </div>
          <div id="bottomNavBar">
            <div className="barLine">
                <img src="/side-bar/people.svg" width={"24px"} />
              <Link to="/pacientes">
                <div>Meus pacientes</div>
              </Link>
              <div className="whiteArrowDiv">
                <Dropdown items={itemsModel}/>
              </div>
            </div>
            <div className="barLine">
              <img src="/side-bar/todo-fill.svg" width={"24px"} />
              <Link to="/entrevista">
                <div>Modelos</div>
              </Link>
              <div className="whiteArrowDiv">
                <Dropdown items={itemsRegister}/>
              </div>
            </div>

            <div className="barLine">
              <img src="/side-bar/Vector.svg" width={"24px"} />
              <Link to="/prontuario">
                <div>Cadastros</div>
              </Link>
            </div>

            <div className="barLine">
              <img src="/side-bar/settings-2.svg" width={"24px"} />
              <Link to="/usuario">
              <div>Preferências</div>              
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="shortMenu">
          <div className="topNavBar shortMenu">
            <img src="/side-bar/logo.svg" onClick={menuHandle} />
          </div>
          <div id="bottomNavBar">
            <Link to="/pacientes">
              <img src="/side-bar/people.svg" width={"24px"} />
            </Link>
            <Link to="/entrevista">
              <img src="/side-bar/todo-fill.svg" width={"24px"} />
            </Link>
            <Link to="/prontuario">
              <img src="/side-bar/Vector.svg" width={"24px"} />
            </Link>
            <Link to="/usuario">
              <img src="/side-bar/settings-2.svg" width={"24px"} />
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default SideBar;
