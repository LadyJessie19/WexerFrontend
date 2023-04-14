import MainBar from "../components/MainBar";
import SideBar from "../components/SideBar";
import Home from "../components/Home";
import Main from "../components/Main";
import Reusable from "../reusable";
import PatientsScreen from "../components/PatientsScreen";

const Major = () => {
  return (
    <>
      <SideBar />
      <MainBar />
      {/* <Main/> */}
      {/* <Home /> */}
      {/* <Reusable /> */}
      <PatientsScreen />
    </>
  );
};

export default Major;
