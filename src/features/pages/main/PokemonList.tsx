import { alpha, Box, Grid, Pagination, Typography } from '@mui/material';
import React from 'react';
import { MAIN_COLOR } from '../../constants';
import { SearchInput } from '../../reusable';

import { PokemonCardProps } from '../../types';
import { getIdFromString } from '../../utils';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemons: PokemonCardProps[];
  searchName: string;
  totalPages: number;
  handleCurrentPage: (event: React.ChangeEvent<unknown>, value: number) => void;
  handleSearchName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCard: (id: number) => void;
}

const PokemonList = ({
  pokemons,
  totalPages,
  searchName,
  handleCurrentPage,
  handleSearchName,
  onClickCard
}: PokemonListProps) => {
  return (
    <Box sx={{ backgroundColor: alpha(MAIN_COLOR, 0.8), px: 1, pt: 2, height: '100%' }}>
      <Grid container justifyContent={{ md: 'space-between', xs: 'center' }} sx={{ px: 4 }}>
        <Grid item>
          <Typography variant="h3" color="white" textAlign="center">
            Pokemons list:
          </Typography>
        </Grid>
        <Grid item>
          <SearchInput value={searchName} onChange={handleSearchName} />
        </Grid>
      </Grid>
      <Box sx={{ mt: 1.5 }}>
        <Grid container>
          <Grid item container justifyContent="space-evenly" spacing={1.5} rowSpacing={3}>
            {pokemons.map((poko) => {
              const id = getIdFromString(poko.url);
              return (
                <Grid item>
                  <PokemonCard id={id} name={poko.name} onClick={() => onClickCard(id)} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, py: 2, bgcolor: MAIN_COLOR }}>
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          onChange={handleCurrentPage}
        />
      </Box>
    </Box>
  );
};

export default PokemonList;
