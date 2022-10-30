import axios from 'axios';
import { PokemonCardProps } from '../features/types';
import { DetailsStateProps } from '../store/slices/detailsSlice';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const POKO_LIMIT = 1154;

interface ResponseGetPokemons {
  count: number;
  results: PokemonCardProps[];
}

export const getPokemons = () => {
  return axios.get<ResponseGetPokemons>(BASE_URL + `?limit=${POKO_LIMIT}`);
};

export const getDetails = (id: number) => {
  return axios.get<DetailsStateProps>(BASE_URL + `/${id}/`);
};
