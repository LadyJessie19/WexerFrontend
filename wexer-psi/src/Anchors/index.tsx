import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Major from "../Major";
import Begin from "../Begin";
import Landing from "../Landing";

const Anchors = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/begin">Begin</Link>
          </li>
          <li>
            <Link to="/major">Major</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/begin" Component={Begin} />
          <Route path="/major" Component={Major} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Anchors;
