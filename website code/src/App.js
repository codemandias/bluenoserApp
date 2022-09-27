import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    
    <div className="App">
      <Dashboard />       
    </div>
  );
}

export default App;

