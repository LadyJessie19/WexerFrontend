import { useState } from "react";
import SideBar from "../../SideBar";
import MainBar from "../../MainBar";
import '../style.css'

import HeaderUs from "./HeaderUs";
import BodyUs from "./BodyUs";

const User = () => {
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
          <HeaderUs />
          <BodyUs />
        </div>
      </div>
    </>
  )
}

export default User