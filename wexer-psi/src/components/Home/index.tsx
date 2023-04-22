import { useState } from "react";
import SideBar from "../SideBar";
import Banner from "./Banner";
import Patients from "./Patients";
import "./style.css";
import MainBar from "../MainBar";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuHandle = () => {
      setMenuOpen(!menuOpen)
    }
    return (
    <>
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MainBar menuHandle={menuHandle}/>
      <Banner />
      <Patients />
    </>
  );
};

export default Home;
