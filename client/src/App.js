import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar/index';
import Login from './components/pages/Login';
import Signup from './components/SignupPage/index';
import { BounceLoader, Barloader, BeatLoader } from "react-spinners";
import "react-datepicker/dist/react-datepicker.css";
import Profile from './components/ProfilePage/index';
import '../src/App.css';
import Dashboard from "./components/pages/Dashboard";
import Moods from "./components/pages/Moods"



export default function App() {
  const [ login, setLogin ] = useState(false)
  function toggle () {
    setLogin(!login)
  }
  return (
    <>
      <Router>
        <Navbar login={login} toggle={toggle}/>
        <Switch>
          <Route path="/" exact component={()=><Login toggle={toggle}/>} />
        </Switch>
        {/* <Switch>
          <Route path="/login" exact component={Login}/>
        </Switch> */}
        <Switch>
          <Route path="/sign-up" exact component={Signup}/>
        </Switch>
        <Switch>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
        <Switch>
          <Route exact path="/moods/:type" component={Moods}/>
        </Switch>
      </Router>
    </>
  )
}

