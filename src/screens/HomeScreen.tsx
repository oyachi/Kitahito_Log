import React, { useState } from 'react';
import { Box } from '@mui/material';
/* components */
import FormArea from '../components/FormArea';
import QRViewer from '../components/QRViewer';
/* styles */
import styles from '../styles/HomeScreen.module.css';
import { useTheme } from '@mui/material/styles';
/* responsive */
import MediaQuery from 'react-responsive';

const InputScreen: React.VFC = () => {
  const theme = useTheme();

  const [visitor, setVisitor] = useState('');
  const [isQrGenerate, setIsQrGerenate] = useState(false);

  const updateVisitor = (str: string) => {
    setVisitor(str);
    setIsQrGerenate(true);
  };

  const reinput = () => {
    setIsQrGerenate(false);
  };

  return (
    <div className={styles.background}>
      <MediaQuery query="(max-width: 767px)">
        <Box bgcolor={theme.palette.form.main} borderRadius={'10px'} className={styles.form_area}>
          {isQrGenerate ? <QRViewer str={visitor} reinput={reinput} /> : <FormArea updateVisitor={updateVisitor} />}
        </Box>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <Box bgcolor={theme.palette.form.main} borderRadius={'10px'} sx={{ width: 500 }} className={styles.form_area}>
          {isQrGenerate ? <QRViewer str={visitor} reinput={reinput} /> : <FormArea updateVisitor={updateVisitor} />}
        </Box>
      </MediaQuery>
    </div>
  );
};

export default InputScreen;
