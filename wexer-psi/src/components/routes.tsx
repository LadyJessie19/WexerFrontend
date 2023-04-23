import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Begin from "./Begin";
import Reusable from "../reusable";
import UserScreen from "./UserScreen";
import RegName from "./Begin/RegName";
import Interview from "./Main/Interview";
import RegPassword from "./Begin/RegPassword";
import PatientsScreen from "./PatientsScreen";
import Registration from "./Begin/Registration";
import MedicalRecord from "./Main/MedicalRecord";
import PatientReg from "./PatientsScreen/PatientReg";
import PatientsList from "./PatientsScreen/PatientsList";
import ReportScreen from "./Main/Interview/ReportScreen";
import FeedbackScreen from "./Main/Interview/FeedbackScreen";
import SimpleScreen from "./Main/Interview/ReportSingleScreen";
import TestApplication from "./Main/EvaluationSection/TestApplication";
import EvaluationFields from "./Main/EvaluationSection/EvaluationFields";
import BehavioralObservation from "./Main/EvaluationSection/BehavioralObservation";

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
        <Route path="/devolutivas" element={<FeedbackScreen />} />
        <Route path="/laudos" element={<ReportScreen />} />
        <Route path="/laudo" element={<SimpleScreen compTitle="Laudo" backPath="/entrevista"/>} />
        <Route path="/atestado" element={<SimpleScreen compTitle="Atestado" backPath="/entrevista"/>} />
        <Route path="/relatorios" element={<SimpleScreen compTitle="Relatórios" backPath="/entrevista"/>} />
        <Route path="/declaracao" element={<SimpleScreen compTitle="Declaração" backPath="/entrevista"/>} />
        <Route path="/parecer" element={<SimpleScreen compTitle="Parecer" backPath="/entrevista"/>} />
        
        <Route path="/tela-pacientes" element={<PatientsScreen />}/>

        <Route path="/pacientes" element={<PatientsList />}/>
        <Route path="/paciente-info" element={<PatientReg />}/>

        <Route path="/usuario" element={<UserScreen />}/>
    </Routes>
  )
}

export default AppRoutes