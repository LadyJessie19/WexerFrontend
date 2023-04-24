import { useState } from "react";

import MainBar from "../../MainBar";
import SideBar from "../../SideBar";

import HeaderIn from "./HeaderIn";
import BodyIn from "./BodyIn";

const Invoicing = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <SideBar menuOpen={menuOpen} setMenuOpen={handleMenu} />
      <MainBar menuHandle={handleMenu} />
      <div className="compUser">
        <div className="divHeader">
          <p>Dados da conta</p>
        </div>
        <div className="specialSection">
          <HeaderIn />
          <BodyIn />
        </div>
      </div>
    </>
  );
};

export default Invoicing;
