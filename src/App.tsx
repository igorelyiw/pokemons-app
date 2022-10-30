import React from 'react';
import './App.css';

import { Layout } from './features/reusable';
import { Box } from '@mui/material';

import DetailsModalContainer from './features/pages/detailsModal/DetailsModalContainer';
import { PokemonsListContainer } from './features/pages/main';

function App() {
  return (
    <Layout>
      <Box sx={{ minHeight: 'calc(100vh - 56px )' }}>
        <PokemonsListContainer />
        <DetailsModalContainer />
      </Box>
    </Layout>
  );
}

export default App;
