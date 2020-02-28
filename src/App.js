import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

import './App.css';
import Projects from './components/Projects'
import Icons from './components/Icons'
import AddProject from './components/AddProject'
import Video from './components/Video'
import IconCard from './components/IconCard'

import ProjectsPara from './components/ProjectsPara'
import WellDone from './components/WellDone';
import Sauti from './components/Sauti'


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Video}/>
        <Route path="/skills" component={Icons}/>
        <Route path="/addproject" component={AddProject}/>
        <Route path="/projects" component={Projects}/>
        {/* include /:id so it renders full url on IconCard as props.match.params.url */}
        <Route path="/techsProject/:tech" component={IconCard}/>
        <Route path="/project/welldone" component={WellDone}/>
        <Route path="/project/sauti" component={Sauti}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
