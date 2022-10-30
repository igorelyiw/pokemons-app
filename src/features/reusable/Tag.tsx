import { Box, Typography } from '@mui/material';
import React from 'react';

interface TagProps {
  title: string;
  bgcolor: string;
  color?: string;
}

const Tag = ({ title, bgcolor, color = 'white' }: TagProps) => {
  return (
    <Box sx={{ p: 1, borderRadius: '16px', minWidth: 50, bgcolor }}>
      <Typography
        variant="body2"
        sx={{ textTransform: 'capitalize' }}
        textAlign="center"
        color={color}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Tag;
