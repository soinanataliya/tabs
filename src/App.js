import React from 'react';
import './App.css';
import { MainPage } from './_components/MainPage';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>Service desk</h1>
      <Router>
        <MainPage />
      </Router>
    </div>
  )
}

export default App;
