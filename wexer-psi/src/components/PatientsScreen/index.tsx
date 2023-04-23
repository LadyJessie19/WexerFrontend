import PatientsList from "./PatientsList";
import "./style.css";

const PatientsScreen = () => {
  return (
    <>
      <div id="patientsScreen">
        <div className="mainHeader">
          <p>Meus pacientes</p>
        </div>
        <PatientsList />
      </div>
    </>
  );
};

export default PatientsScreen;
