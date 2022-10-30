import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  alpha,
  DialogTitle,
  Grid,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { MAIN_COLOR } from '../../constants';
import { StatsSection, Tag } from '../../reusable';
import { PokoTypesProps, StatsProps } from '../../types';

interface DetailsModalProps {
  name: string;
  id: number;
  open: boolean;
  stats: StatsProps[];
  types: PokoTypesProps[];
  handleClose: () => void;
}

const DetailsModal = ({ open, name, id, stats, types, handleClose }: DetailsModalProps) => {
  const getTagColors = (index: number) => {
    const bgcolor = index % 2 === 0 ? 'yellow' : 'green';
    const color = index % 2 === 0 ? 'black' : 'white';
    return { bgcolor, color };
  };
  return (
    <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography
          variant="h5"
          sx={{ textTransform: 'capitalize' }}
        >{`${name} №${id}`}</Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs>
            <Grid container spacing={1.5} justifyContent="center">
              <Grid item>
                <Box sx={{ p: 2, backgroundColor: alpha(MAIN_COLOR, 0.6), borderRadius: '16px' }}>
                  <Box
                    component="img"
                    sx={{
                      width: 200,
                      height: 200
                    }}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={1.5}>
                  {types.map((type, index) => (
                    <Grid item>
                      <Tag title={type.type.name} {...getTagColors(index)} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <StatsSection stats={stats} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsModal;
