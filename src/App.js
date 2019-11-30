import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

import './App.css';
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import Video from './components/Video'



function App() {
  return (
    <Router>
    <div className="App">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/group">Group Projects</Link>
      </li>
      <li>
        <Link to="/addproject">Manage Projects</Link>
      </li>
      <Switch>
        <Route exact path="/" component={Video}/>
        <Route path="/addproject" component={AddProject}/>
        <Route path="/group" component={Projects}/>
      </Switch>
     

     
    </div>
    </Router>
  );
}

export default App;
