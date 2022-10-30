import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { StatsProps } from '../types';

interface StatsSectionProps {
  stats: StatsProps[];
}
const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'GrayText',
        width: '100%',
        minWidth: 300,
        borderRadius: '16px',
        overflow: 'hidden'
      }}
    >
      <Grid container spacing={2} sx={{ p: 2 }}>
        {stats.map((item) => (
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item sx={{ width: 100 }}>
                <Typography variant="body1" color="white" sx={{ textTransform: 'capitalize' }}>
                  {item.stat.name}
                </Typography>
              </Grid>
              <Grid item xs>
                <LinearProgress variant="determinate" value={item.base_stat} />
              </Grid>
              <Grid item>
                <Typography variant="body1" color="white">
                  {item.base_stat}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
