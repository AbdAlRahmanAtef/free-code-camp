import { Paper, Typography } from '@mui/material';
import React from 'react';

const TitleItem = ({ url, label, icon, handleClick }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        padding: '16px 16px',
        cursor: 'pointer',
        mb: 2,
      }}
      onClick={handleClick}
    >
      {icon}
      <Typography sx={{ fontSize: '26px', fontWeight: '400' }}>
        {label}
      </Typography>
    </Paper>
  );
};

export default TitleItem;
