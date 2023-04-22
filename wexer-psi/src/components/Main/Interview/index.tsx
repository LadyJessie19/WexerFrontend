import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import FeedbackScreen from './FeedbackScreen'
import ReportScreen from './ReportScreen'
import SimpleScreen from './ReportSingleScreen'
import './style.css'

const Interview = () => {
  return (
    <>
      <div className="backInterview">
          <div className="bodyInterview">
              
          </div>
      </div>
        {/* <Routes>
          <Route path="/interview/begin" element={<Interview />} />
          <Route path="/devolutivas" element={<FeedbackScreen />} />
          <Route path="/interview/laudos" element={<ReportScreen />} />
          <Route path="/interview/laudo" element={<SimpleScreen compTitle="Laudo"/>} />
          <Route path="/interview/atestado" element={<SimpleScreen compTitle="Atestado"/>} />
          <Route path="/interview/relatorios" element={<SimpleScreen compTitle="Relatórios"/>} />
          <Route path="/interview/declaracao" element={<SimpleScreen compTitle="Declaração"/>} />
          <Route path="/interview/parecer" element={<SimpleScreen compTitle="Parecer"/>} />
        </Routes> */}
    </>
  )
}

export default Interview