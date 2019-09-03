import React from 'react';

import Dashboard from './dashboard/Dashboard';
import Header from './header/Header'
import Sidebar from './sidbar/Sidebar'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
