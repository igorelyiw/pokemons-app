import { configureStore } from '@reduxjs/toolkit';
import detailsSlice from './slices/detailsSlice';
import pokemonsSlice from './slices/pokemonsSlice';

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    datails: detailsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
