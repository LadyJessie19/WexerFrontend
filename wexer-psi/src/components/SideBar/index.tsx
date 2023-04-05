import React from 'react'
import './style.css'

const index = () => {
  return (
    <>
        <nav>
          <div id="topNavBar">
            <img src="/vite.svg" />
          </div>
          <div id="bottomNavBar">
            <img src="/vite.svg" width={'32px'} />
            <img src="/react.svg" width={'32px'}/>
            <img src="/vite.svg" width={'32px'}/>
            <img src="/react.svg" width={'32px'}/>
          </div>
        </nav>
    </>
  )
}

export default index