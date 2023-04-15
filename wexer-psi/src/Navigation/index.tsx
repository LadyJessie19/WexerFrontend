
import About from './About';
import Contact from './Contact';
import Home from './Home';

import { Route, Link, Routes, BrowserRouter } from 'react-router-dom';

function Route1() {
  return (
    <div>
      <h1>Route 1</h1>
      <p>This is the content for Route 1</p>
    </div>
  );
}

function Route2() {
  return (
    <div>
      <h1>Route 2</h1>
      <p>This is the content for Route 2</p>
    </div>
  );
}

function Route3() {
  return (
    <div>
      <h1>Route 3</h1>
      <p>This is the content for Route 3</p>
    </div>
  );
}

function NavigationOO() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/route1">Route 1</Link>
          </li>
          <li>
            <Link to="/route2">Route 2</Link>
          </li>
          <li>
            <Link to="/route3">Route 3</Link>
          </li>
        </ul>
      </nav>
        <Routes>
            <Route path="/route1" Component={Route1} />
            <Route path="/route2" Component={Route2} />
            <Route path="/route3" Component={Route3} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default NavigationOO;
