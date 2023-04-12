import Home from './components/Home'
import Main from './components/Main'
import MainBar from './components/MainBar'
import SideBar from './components/SideBar'
import Reusable from './reusable'
import { userData, postData } from './services/data'

function App() {
  userData()
  return (
    <div className="App">
      <SideBar/>
      <MainBar />
      {/* <Main/> */}
      {/* <Home /> */}
      <Reusable />
    </div>
  )
}

export default App
