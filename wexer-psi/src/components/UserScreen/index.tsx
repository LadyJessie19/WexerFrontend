import SideBar from "../SideBar";
import MainBar from "../MainBar";

import "./style.css";
import "../../reusable/Buttons/styleButtons.css";

import { useState } from "react";
import Invoicing from "./Invoicing";
import User from "./User";

const UserScreen = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <SideBar menuOpen={menuOpen} setMenuOpen={handleMenu} />
      <MainBar menuHandle={handleMenu} />
      <User />
      <Invoicing />
    </>
  );
};

export default UserScreen;
