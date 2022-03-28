import React from 'react';
import { Popover, Typography, Button } from '@mui/material';

const BottomPopover: React.VFC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="text" color="inherit" aria-describedby={id} onClick={handleClick}>
        <Typography sx={{ p: 1, fontSize: '12px' }} color="primary">
          情報の取り扱いについて
        </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <ul>
          <li>この情報は新型コロナ感染拡大防止のため、学生課に提出します</li>
          <li>QRコードは端末上で生成されるため、端末から情報が送信されることはありません</li>
        </ul>
      </Popover>
    </>
  );
};

export default BottomPopover;
