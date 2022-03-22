import React from 'react';
import QRCode from 'react-qr-code';
import { useLocation } from 'react-router-dom';
/* styles */
import styles from '../styles/QRcodeScreen.module.css';

const QRcodeScreen: React.FC = () => {
  const location = useLocation();
  const obj = location.state as { info: string };
  return (
    <div className={styles.background}>
      <div className={styles.qr_view}>
        <h1>QRコード</h1>
        <QRCode value={obj.info} />
      </div>
    </div>
  );
};

export default QRcodeScreen;
