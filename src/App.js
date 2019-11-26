import React from 'react';

import './App.css';
import Projects from './components/Projects'
import NewProject from './components/NewProject'

function App() {
  return (
    <div className="App">
      <Projects />
     <NewProject/>
    </div>
  );
}

export default App;
