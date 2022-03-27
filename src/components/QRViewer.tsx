import React from 'react';
import QRCode from 'react-qr-code';
import Button from '@mui/material/Button';
/* styles */
import styles from '../styles/QRViewer.module.css';
import { useTheme } from "@mui/material/styles"

interface Props {
  str: string;
  reinput: () => void;
}

const QRViewer: React.VFC<Props> = ({ str, reinput }) => {
  const theme = useTheme()

  return (
    <div className={`${styles.qr_view} ${styles.fade}`}>
      <h1>入場者情報</h1>
      <div className={theme.palette.mode === "light" ? styles.qrcode_light: styles.qrcode_dark}>
        <QRCode size={200} value={str} />
      </div>

      <div className={styles.button_area}>
        <Button variant="outlined" color="primary" size="small" onClick={reinput} className={styles.button}>
          再生成する
        </Button>
      </div>

    </div>
  );
};

export default QRViewer;
