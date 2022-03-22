import React from 'react';
import { Route, Routes } from 'react-router-dom';
/* screens */
import InputScreen from '../screens/InputScreen';
import QRcodeScreen from '../screens/QRcodeScreen';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<InputScreen />} />
      <Route path="/qrcode" element={<QRcodeScreen />} />
    </Routes>
  );
};

export default Router;
