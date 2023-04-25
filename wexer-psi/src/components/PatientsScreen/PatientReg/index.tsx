import { useState } from "react";
import { Link } from "react-router-dom";

import GeneralField from "./GeneralField";
import ObsField from "./ObsField";
import SideBar from "../../SideBar";
import MainBar from "../../MainBar";

import ButtonSave from "../../../reusable/Buttons/ButtonSave";
import ButtonBack from "../../../reusable/Buttons/ButtonBack";

const PatientReg = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MainBar menuHandle={menuHandle} />
      <div className="compPatientReg">
        <div id="sectionHeader">
          <div className="dFlexRow">
            <div className="leftSearchBar">
              <span>
                <Link to="/registro-paciente">Dados Cadastrais</Link>{" "}
              </span>
              <span>
                <Link to="/prontuario">Prontuário</Link>
              </span>
            </div>
          </div>
          <div className="dFlexRow">
            <ButtonSave />
            <ButtonBack backPath="/pacientes" />
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
      </div>
    </>
  );
};

export default PatientReg;
