import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
/* styles */
import { useTheme } from '@mui/material';
/* components */
import ToggleColorModeButton from './ToggleColorModeButton';

const MenuBar: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: theme.palette.appbar.main }} position="static">
        <Toolbar>
          <ToggleColorModeButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuBar;
