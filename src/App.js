import logo from './logo.svg';
import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Resume from "./components/Resume";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Projects' component={Projects} exact/>
          <Route path='/Skills' component={Skills} exact/>
          <Route path='/Contact' component={Contact} exact/>
          <Route path='/Resume' component={Resume} exact/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
