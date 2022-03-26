import React from 'react';
import QRCode from 'react-qr-code';
import Button from '@mui/material/Button';
/* styles */
import styles from '../styles/QRViewer.module.css';

interface Props {
  str: string;
  reinput: () => void;
}

const QRViewer: React.VFC<Props> = ({ str, reinput }) => {
  return (
    <div className={`${styles.qr_view} ${styles.fade}`}>
      <h1>入場券</h1>
      <QRCode value={str} />

      <div className={styles.button_area}>
        <Button variant="contained" color="primary" size="large" onClick={reinput} className={styles.button}>
          再発行する
        </Button>
      </div>
    </div>
  );
};

export default QRViewer;
