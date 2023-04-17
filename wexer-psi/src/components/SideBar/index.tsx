import { useState } from 'react'
import './style.css'

const SideBar = ({menuOpen, setMenuOpen}) => {

const menuHandle = () => setMenuOpen(!menuOpen)

  return (
    <>
    {menuOpen ? (<nav className='largeMenu'>
          <div className="topNavBar">
            <img src="/side-bar/logo.svg"/>  
            <span onClick={menuHandle}>fechar menu</span>
          </div>
          <div id="bottomNavBar">
            <div className="barLine">
              <img src="/side-bar/people.svg" width={'24px'} />
              <div>Meus pacientes</div>
            </div>

            <div className="barLine">
              <img src="/side-bar/todo-fill.svg" width={'24px'}/>
              <div>Modelos</div>
            </div>

            <div className="barLine">
              <img src="/side-bar/Vector.svg" width={'24px'}/>
              <div>Cadastros</div>
            </div>

            <div className="barLine">
              <img src="/side-bar/settings-2.svg" width={'24px'}/>
              <div>Preferências</div>
            </div>
          </div>
        </nav>) : 
    (<nav className='shortMenu'>
          <div className="topNavBar shortMenu">
            <img src="/side-bar/logo.svg" onClick={menuHandle}/>
          </div>
          <div id="bottomNavBar">
            <img src="/side-bar/people.svg" width={'24px'} />
            <img src="/side-bar/todo-fill.svg" width={'24px'}/>
            <img src="/side-bar/Vector.svg" width={'24px'}/>
            <img src="/side-bar/settings-2.svg" width={'24px'}/>
          </div>
        </nav>)
      }
        
    </>
  )
}

export default SideBar