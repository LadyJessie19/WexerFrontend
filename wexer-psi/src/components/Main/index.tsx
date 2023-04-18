import "./style.css"
import NavBar from './NavBar'
import MedicalRecord from "./MedicalRecord"
import EvaluationSection from "./EvaluationSection"
import Interview from "./Interview"

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <>
    <Router>
    <div className="MainComp">
        <NavBar link1={<Link to="/">Home</Link>} link2={<Link to="/evaluation">Avaliação</Link>} link3={<Link to="/interview">Entrevista</Link>}/>
    </div>
        <Routes>
          <Route path="/" element={<MedicalRecord />} />
          <Route path="/evaluation" element={<EvaluationSection />} />
          <Route path="/interview" element={<Interview />} />
        </Routes>
    </Router>
    </>
  )
}

export default Main