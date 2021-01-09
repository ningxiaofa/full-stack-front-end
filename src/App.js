import React from 'react'
import {
  HashRouter as Router,
} from 'react-router-dom'

import Nav from './components/nav'
import AppRouter from './appRouter'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <Nav />
        {/* Routing matching rules */}
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
