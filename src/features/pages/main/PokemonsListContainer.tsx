import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../../api';
import { modalWithDetailsThunk } from '../../../store/slices/detailsSlice';
import { setPokemons, setFilteredPokemons } from '../../../store/slices/pokemonsSlice';
import { ITEMS_PER_PAGE } from '../../constants';
import { useAppSelector } from '../../hooks';

import PokemonList from './PokemonList';

const PokemonsListContainer = () => {
  const dispatch = useDispatch();
  const state = useAppSelector((state) => state.pokemons);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const filtered = state.pokemons.filter((poko) =>
      poko.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    );
    dispatch(setFilteredPokemons(filtered));
  }, [searchName, dispatch, state.pokemons]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await getPokemons();
      dispatch(setPokemons(response));
    };

    fetchPokemons();
  }, []);

  const handleCurrentPage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const getCurrentData = () => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    return state.pokemons.slice(start, end);
  };

  const onClickCard = async (id: number) => {
    dispatch(modalWithDetailsThunk(id));
  };

  const data = !searchName ? getCurrentData() : state.filteredPokemons.slice(0, 12);

  const totalPages = Math.ceil(state.count / ITEMS_PER_PAGE);

  return (
    <PokemonList
      pokemons={data}
      totalPages={totalPages}
      searchName={searchName}
      handleCurrentPage={handleCurrentPage}
      handleSearchName={handleSearchName}
      onClickCard={onClickCard}
    />
  );
};

export default PokemonsListContainer;
