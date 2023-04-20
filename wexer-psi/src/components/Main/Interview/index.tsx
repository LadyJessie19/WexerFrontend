import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import FeedbackScreen from './FeedbackScreen'
import ReportScreen from './ReportScreen'
import SimpleScreen from './ReportSingleScreen'
import './style.css'

const Interview = () => {
  return (
    <>
    <Router>
      <div className="backInterview">
          <div className="bodyInterview">
              <ul>
                <li><Link to="/devolutivas">Devolutivas</Link></li>
              </ul>
          </div>
      </div>
        <Routes>
          <Route path="/" element={<Interview />} />
          <Route path="/devolutivas" element={<FeedbackScreen />} />
          <Route path="/laudos" element={<ReportScreen />} />
          <Route path="/laudo" element={<SimpleScreen compTitle="Laudo"/>} />
          <Route path="/atestado" element={<SimpleScreen compTitle="Atestado"/>} />
          <Route path="/relatorios" element={<SimpleScreen compTitle="Relatórios"/>} />
          <Route path="/declaracao" element={<SimpleScreen compTitle="Declaração"/>} />
          <Route path="/parecer" element={<SimpleScreen compTitle="Parecer"/>} />
        </Routes>
      </Router>
    </>
  )
}

export default Interview