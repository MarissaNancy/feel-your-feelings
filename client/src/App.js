import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../src/components/NavBar/index';
import Home from '../src/components/pages/Home';
import Login from '../src/components/LoginPage/index';
import Signup from '../src/components/SignupPage/index';
import { BounceLoader, Barloader, BeatLoader } from "react-spinners";
import "react-datepicker/dist/react-datepicker.css";
import Profile from '../src/components/ProfilePage/index';
import '../src/App.css';
import Dashboard from "../src/components/pages/Dashboard";
import Moods from "../src/components/pages/Moods"



export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login}/>
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

