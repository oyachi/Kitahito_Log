import React from 'react';
import './App.css';
/* router */
import { BrowserRouter } from 'react-router-dom';
import Router from '../src/router/Router';
/* components */
import CustomThemeProvider from './components/CustomThemeProvider';
import MenuBar from "./components/MenuBar";

function App() {

  return (
    <CustomThemeProvider>
    <BrowserRouter>
      <MenuBar />
      <Router />
    </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
