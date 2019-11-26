import React from 'react';

import './App.css';
import Projects from './components/Projects'
import NewProject from './components/NewProject'
import Techs from './components/Techs'

function App() {
  return (
    <div className="App">
      <Techs/>
      <Projects />
     <NewProject/>
    </div>
  );
}

export default App;
