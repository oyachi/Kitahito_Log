import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
/* styles */
import { useTheme } from '@mui/material';
/* components */
import ToggleColorModeButton from './ToggleColorModeButton';
import Logo from "./Logo"

const MenuBar: React.VFC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: theme.palette.appbar.main }} position="static">
        <Toolbar>
          <ToggleColorModeButton />
          <div style={{flexGrow: 1}}></div>
          <Logo mode={theme.palette.mode}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuBar;
