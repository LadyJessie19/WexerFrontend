import "./style.css";
import FieldsData from "./FieldsData";
import FieldsClinic from "./FieldsClinic";
import FieldsPassword from "./FieldsPassword";
import ButtonSave from "../../reusable/Buttons/ButtonSave";
import "../../reusable/Buttons/styleButtons.css";
import ButtonBack from "../../reusable/Buttons/ButtonBack";
import SideBar from "../SideBar";
import MainBar from "../MainBar";
import { useState } from "react";

const UserScreen = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <SideBar menuOpen={menuOpen} setMenuOpen={handleMenu} />
      <MainBar menuHandle={handleMenu} />
      <div className="compUser">
        <div id="divHeader">
          <p>Dados da conta</p>
        </div>
        <div className="specialSection">
          <div id="sectionHeader">
            <div className="dFlexRow">
              <span>
                <h5>Meus Dados</h5>
              </span>
              <span>
                <h5>Meu faturamento</h5>
              </span>
            </div>
            <div className="dFlexRow">
              <ButtonSave />
              <ButtonBack />
            </div>
          </div>
          <div id="sectionBody">
            <div className="bannerBody">
              <p>Dados</p>
            </div>
            <FieldsData />
            <div className="bannerBody">
              <p>Dados da clínica</p>
            </div>
            <FieldsClinic />
            <div className="bannerBody">
              <p>Alterar senha</p>
            </div>
            <FieldsPassword />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserScreen;
