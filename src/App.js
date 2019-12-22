import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

import './App.css';
import Projects from './components/Projects'
import Icons from './components/Icons'
import AddProject from './components/AddProject'
import Video from './components/Video'
import IconCard from './components/IconCard'



function App() {
  return (
    <Router>
    <div className="App">
      {/* <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/group">Group Projects</Link>
      </li>
      <li>
        <Link to="/addproject">Manage Projects</Link>
      </li> */}
      <Switch>
        <Route exact path="/" component={Video}/>
        <Route path="/skills" component={Icons}/>
        <Route path="/addproject" component={AddProject}/>
        <Route path="/group" component={Projects}/>
        {/* include /:id so it renders full url on IconCard as props.match.params.url */}
        <Route path="/techInProject/:id" component={IconCard}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
