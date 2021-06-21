import React from 'react';

import './App.css';
import Dashboard from './container/Dashboard/index';
import Header from './components/Header/index';
import WelcomeBK from './components/WelcomeBK/Welcome';
import GradingPageBK from './components/GradingBK/index';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import HowitWorks from './components/HowitWorks';
import GoogleReviews from "./components/GoogleReviews"
import PointsDetails from './components/points';
import Comments from './components/Comments';
import EmployeeTable from './components/EmployeeTable';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact path="/" component={EmployeeTable}/>
        <Route  path='/welcomeBK' component={WelcomeBK} />
        <Route  path='/gradingBK' component={GradingPageBK} />
        <Route  path='/scorecard' component={HowitWorks} />
        <Route  path='/dash' component={Dashboard} />
      </Router>
   
    </div>
  );
}

export default App;
