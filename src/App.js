import React from 'react';

import './App.css';
import Projects from './components/Projects'
import NewProject from './components/NewProject'
import Techs from './components/Techs'
import AddProject from './components/AddProject'

function App() {
  return (
    <div className="App">
      <AddProject/>
      <Techs/>
      <Projects />
     <NewProject/>
    </div>
  );
}

export default App;
