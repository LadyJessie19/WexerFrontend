import { Link } from 'react-router-dom'
import { useState } from 'react'
import SideBar from '../../SideBar'
import MainBar from '../../MainBar'
import ButtonBigInterview from './ButtonBigInterview'

import './style.css'

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
            <div className='interviewLine'>
              <ButtonBigInterview path={'/devolutivas'} title={'Devolutivas'}/>
              <ButtonBigInterview path={'/laudos'} title={'Laudos'}/>
              <ButtonBigInterview path={'/laudo'} title={'Laudo'}/>
              <ButtonBigInterview path={'/atestado'} title={'Atestado'}/>
            </div>
            <div className='interviewLine'>
              <ButtonBigInterview path={'/relatorios'} title={'Relatorios'}/>
              <ButtonBigInterview path={'/declaracao'} title={'Declaração'}/>
              <ButtonBigInterview path={'/parecer'} title={'Parecer'}/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Interview