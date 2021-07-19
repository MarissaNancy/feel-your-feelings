import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import { BounceLoader, Barloader, BeatLoader } from "react-spinners";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';



export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Switch>
          <Route path="/login" exact component={Login}/>
        </Switch>
        <Switch>
          <Route path="/sign-up" exact component={Signup}/>
        </Switch>
      </Router>
    </>
  )
}

