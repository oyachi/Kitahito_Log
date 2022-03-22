import React from 'react';
import './App.css';
/* router */
import { BrowserRouter } from 'react-router-dom';
import Router from '../src/router/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
