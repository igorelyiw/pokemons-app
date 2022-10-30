import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import { MAIN_COLOR } from '../../constants';

interface PokemonCardProps {
  id: number;
  name: string;
  onClick: () => void;
}

const PokemonCard = ({ id, name, onClick }: PokemonCardProps) => {
  return (
    <ButtonBase
      sx={{
        display: 'flex',
        p: 2,
        overflow: 'hidden',
        justifyContent: 'center',
        background: 'white',
        borderRadius: '16px',
        cursor: 'pointer',
        transition: 'top 0.25s',
        top: 0,
        position: 'relative',
        color: MAIN_COLOR,
        '&:hover': {
          top: -4,
          boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
        }
      }}
      onClick={onClick}
    >
      <Box
        component="img"
        sx={{
          width: 200,
          height: 200
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        sx={{ position: 'absolute', bottom: 4, textTransform: 'capitalize' }}
        noWrap
      >
        {name}
      </Typography>
    </ButtonBase>
  );
};

export default PokemonCard;
