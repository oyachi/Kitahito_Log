import React from 'react';
import './App.css';
/* components */
import CustomThemeProvider from './components/CustomThemeProvider';
import MenuBar from "./components/MenuBar";
import HomeScreen from "./screens/HomeScreen"

function App() {

  return (
    <CustomThemeProvider>
    <>
      <MenuBar />
      <HomeScreen />
    </>
    </CustomThemeProvider>
  );
}

export default App;
