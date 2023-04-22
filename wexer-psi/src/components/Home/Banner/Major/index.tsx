import MainBar from "../../../MainBar";
import SideBar from "../../../SideBar";
import Main from "../../../Main";
import Home from "../..";
import Reusable from "../../../../reusable";
import PatientsScreen from "../../../PatientsScreen";
import UserScreen from "../../../UserScreen";
import { useState } from "react";

const Major = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuHandle = () => setMenuOpen(!menuOpen)
  return (
    <>
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MainBar menuHandle={menuHandle}/>
      <div id={menuOpen ? "greyBack" : ""}></div>
      {/* <Main/> */}
      {/* <Home /> */}
      <Reusable />
      {/* <PatientsScreen /> */}
      {/* <UserScreen /> */}
    </>
  );  
};

export default Major;
