import { useState } from "react";
import GeneralField from "./GeneralField";
import ObsField from "./ObsField";
import SideBar from "../../SideBar";
import MainBar from "../../MainBar";
import { Link } from "react-router-dom";
import ButtonSave from "../../../reusable/Buttons/ButtonSave";
import ButtonBack from "../../../reusable/Buttons/ButtonBack";

const PatientReg = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuHandle = () => {
    setMenuOpen(!menuOpen)
  }

    return (
      <>
        <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MainBar menuHandle={menuHandle}/>
        <section>
          <div id="sectionHeader">
            <div className="dFlexRow">
                <Link to="/registro-paciente"><span><h5>Dados cadastrais</h5></span></Link>
                <Link to="/prontuario"><span><h5>Prontuário</h5></span> </Link>             
            </div>
            <div className="dFlexRow">
              <ButtonSave />
              <ButtonBack />
            </div>
          </div>
          <div id="sectionBody">
            <div className="bannerBody">
                <p>Dados gerais</p>
            </div>
                <GeneralField />
            <div className="bannerBody">
                <p>Documentos</p>
            </div>
            <div className="bannerBody">
                <p>Endereços</p>
            </div>
            <div className="bannerBody">
                <p>Contatos</p>
            </div>
            <div className="bannerBody">
                <p>Observações</p>
            </div>
                <ObsField />
            <div className="dFlexRow">
                <ButtonSave />
                <ButtonBack />
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default PatientReg;
  