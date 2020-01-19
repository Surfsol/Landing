import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

import './App.css';
import Projects from './components/Projects'
import Icons from './components/Icons'
import AddProject from './components/AddProject'
import Video from './components/Video'
import IconCard from './components/IconCard'

import ProjectsPara from './components/ProjectsPara'



function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Video}/>
        <Route path="/skills" component={Icons}/>
        <Route path="/addproject" component={AddProject}/>
        <Route path="/team" component={Projects}/>
        {/* include /:id so it renders full url on IconCard as props.match.params.url */}
        <Route path="/techsProject/:tech" component={IconCard}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
