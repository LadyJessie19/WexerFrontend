import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import FeedbackScreen from './FeedbackScreen'
import ReportScreen from './ReportScreen'
import SimpleScreen from './ReportSingleScreen'
import './style.css'
import SideBar from '../../SideBar'
import MainBar from '../../MainBar'
import { useState } from 'react'

const Interview = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  const handleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <SideBar menuOpen={menuOpen} setMenuOpen={handleMenu} />
      <MainBar menuHandle={handleMenu}/>
      <div className="backInterview">
          <div className="bodyInterview">
            <ul>
              <Link to="/devolutivas"><li>Devolutivas</li></Link>
            </ul>
            <ul>
              <Link to="/laudos"><li>Laudos</li></Link>
            </ul>
            <ul>
              <Link to="/laudo"><li>Laudo</li></Link>
            </ul>
            <ul>
              <Link to="/atestado"><li>Atestado</li></Link>
            </ul>
            <ul>
              <Link to="/relatorios"><li>Relatórios</li></Link>
            </ul>
            <ul>
              <Link to="/declaracao"><li>Declaração</li></Link>
            </ul>
            <ul>
              <Link to="/parecer"><li>Parecer</li></Link>
            </ul>
          </div>
      </div>
    </>
  )
}

export default Interview