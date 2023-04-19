import MainBar from "../components/MainBar";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import Home from "../components/Home";
import Reusable from "../reusable";
import PatientsScreen from "../components/PatientsScreen";
import UserScreen from "../components/UserScreen";
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
