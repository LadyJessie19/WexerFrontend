import { Route, Routes } from "react-router-dom";
import Begin from "./Begin";
import Major from "./Home/Banner/Major";
import Main from "./Main";
import MedicalRecord from "./Main/MedicalRecord";
import Interview from "./Main/Interview";
import EvaluationSection from "./Main/EvaluationSection";
import PatientsScreen from "./PatientsScreen";
import UserScreen from "./UserScreen";
import Home from "./Home";
import RegName from "./Begin/RegName";
import Registration from "./Begin/Registration";
import RegPassword from "./Begin/RegPassword";
import FeedbackScreen from "./Main/Interview/FeedbackScreen";
import EvaluationFields from "./Main/EvaluationSection/EvaluationFields";
import TestApplication from "./Main/EvaluationSection/TestApplication";
import BehavioralObservation from "./Main/EvaluationSection/BehavioralObservation";
import Reusable from "../reusable";
import PatientReg from "./PatientsScreen/PatientReg";
import PatientsList from "./PatientsScreen/PatientsList";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Begin />}/>

        <Route path="/registo-nome" element={<RegName />}/>
        <Route path="/registo-senha" element={<RegPassword />}/>
        <Route path="/registo-info" element={<Registration />}/>

        <Route path="/home" element={<Home />}/>

        <Route path="/prontuario" element={<MedicalRecord />}/>
        <Route path="/registro-paciente" element={<PatientReg />}/>

        <Route path="/reusable" element={<Reusable />}/>

        <Route path="/avaliacao" element={<EvaluationFields />}/>
        <Route path="/teste" element={<TestApplication />}/>
        <Route path="/comportamento" element={<BehavioralObservation />}/>

        <Route path="/entrevista" element={<Interview />}/>
        <Route path="/entrevista" element={<Interview />}/>
        
        <Route path="/tela-pacientes" element={<PatientsScreen />}/>

        <Route path="/pacientes" element={<PatientsList />}/>
        <Route path="/paciente-info" element={<PatientReg />}/>

        <Route path="/usuario" element={<UserScreen />}/>
        
        <Route path="/declarativas" element={<FeedbackScreen />}/>

        
    </Routes>
  )
}

export default AppRoutes