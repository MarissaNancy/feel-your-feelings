import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import { BounceLoader, Barloader, BeatLoader } from "react-spinners";
import "react-datepicker/dist/react-datepicker.css";
import Profile from './components/pages/Profile';
import './App.css';
import Dashboard from "./components/pages/Dashboard";
import Moods from "./components/pages/Moods"



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
          <Route exact path="/moods" component={Moods}/>
        </Switch>
      </Router>
    </>
  )
}

