import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Brightness4, Brightness7 } from '@mui/icons-material';
/* theme */
import { useColorModeContext } from './CustomThemeProvider';
import { useTheme } from '@mui/material/styles';

const ToggleColorModeButton: React.VFC = () => {
  const theme = useTheme();
  const colorMode = useColorModeContext();
  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ToggleColorModeButton;
