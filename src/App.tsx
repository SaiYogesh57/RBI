import React from 'react';

import './App.css';
import Dashboard from './container/Dashboard/index';
import Header from './components/Header/index';
import Welcome from './components/WelcomeBK/Welcome';
import GradingPage from './components/GradingBK';

function App() {
  return (
    <div className="App">
      <Header/>
    <Welcome/>
    </div>
  );
}

export default App;
