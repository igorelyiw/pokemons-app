import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PokemonCardProps } from '../../features/types';

interface PokemonsState {
  count: number;
  pokemons: PokemonCardProps[];
  filteredPokemons: PokemonCardProps[];
}

type ResponsePokemons = {
  data: {
    results: PokemonCardProps[];
    count: number;
  };
};
const initialState: PokemonsState = { pokemons: [], filteredPokemons: [], count: 0 };

const pokemonsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<ResponsePokemons>) {
      state.count = action.payload.data.count;
      state.pokemons = action.payload.data.results;
    },
    setFilteredPokemons(state, action: PayloadAction<PokemonCardProps[]>) {
      state.filteredPokemons = action.payload;
    }
  }
});

export const { setPokemons, setFilteredPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
