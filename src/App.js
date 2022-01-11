import React from "react";
import Data from "./Data";
import Home from "./Home";
import Rendom from "./Rendom";


import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rendom">RendomColor</Link>
        </li>

      </ul> */}
      {/* <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <Link to="/data" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div> */}

      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rendom" >
            <Rendom />
          </Route>
          <Route path="/data/:id/:username" >
            <Data />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;