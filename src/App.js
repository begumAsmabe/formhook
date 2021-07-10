import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from "./Component/Login/Login";
import SignUp from './Component/Signup/Signup';


function App() {
  return (<Router>
    <div className="App">
      <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/*<Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
           */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" style={{color:"rgb(116, 241, 168)"}} to={"/sign-in"}>Talent Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:"rgb(116, 241, 168)"}} to={"/sign-up"}>Fan Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;