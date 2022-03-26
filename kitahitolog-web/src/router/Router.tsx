import React from 'react';
import { Route, Routes } from 'react-router-dom';
/* screens */
import HomeScreen from '../screens/HomeScreen';
import QRcodeScreen from '../screens/QRcodeScreen';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/qrcode" element={<QRcodeScreen />} />
    </Routes>
  );
};

export default Router;
