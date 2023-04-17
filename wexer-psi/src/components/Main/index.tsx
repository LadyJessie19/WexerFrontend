import "./style.css"
import NavBar from './NavBar'
import MedicalRecord from "./MedicalRecord"
import Notes from "./Notes"
import EvaluationSection from "./EvaluationSection"
import Interview from "./Interview"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
    <div className="MainComp">
        <NavBar />

        <MedicalRecord />
        {/* <EvaluationSection /> */}
        {/* <Interview /> */}
    </div>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );

    </>
  )
}

export default Main