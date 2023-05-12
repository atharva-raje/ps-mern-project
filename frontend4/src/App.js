//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Home } from'./Home';
import { registerStudent } from './Student';
function App() {
  return (
    <div className="App">
      <Router>      
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
