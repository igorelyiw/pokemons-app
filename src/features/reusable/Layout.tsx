import { Box, Container } from '@mui/material';
import React from 'react';
import { HEADER_HEIGHT } from '../constants';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(https://wallpaper.dog/large/743770.jpg)`
      }}
    >
      <Container
        sx={{
          maxWidth: 1080,
          height: `calc(100% - ${HEADER_HEIGHT}px)`,
          boxSizing: 'border-box'
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
