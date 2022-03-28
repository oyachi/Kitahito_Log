import React from 'react';
import QRCode from 'react-qr-code';
import { Button, Typography} from '@mui/material';
/* styles */
import styles from '../styles/QRViewer.module.css';
import { useTheme } from "@mui/material/styles"
/* animation */
import animation from "../animation/animation.module.css"

interface Props {
  str: string;
  reinput: () => void;
}

const QRViewer: React.VFC<Props> = ({ str, reinput }) => {
  const theme = useTheme()

  return (
    <div className={`${styles.qr_view} ${animation.fadeUp}`}>
      <h1>入場者情報</h1>
      <div className={theme.palette.mode === "light" ? styles.qrcode_light: styles.qrcode_dark}>
        <QRCode size={200} value={str} />
      </div>

      <div className={styles.typography}>
        <Typography sx={{p: 1, fontSize: "12px"}} color="primary" className={animation.flash}>初回入場時に会場入口のリーダーにかざしてください</Typography>
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
