import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getDetails } from '../../api';
import { AppDispatch } from '../store';
import { PokoTypesProps, StatsProps } from '../../features/types';

export interface DetailsStateProps {
  isOpenModal: boolean;
  id: number;
  name: string;
  stats: StatsProps[];
  types: PokoTypesProps[];
}

const initialState: DetailsStateProps = {
  isOpenModal: false,
  id: 0,
  name: '',
  stats: [],
  types: []
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const modalWithDetailsThunk =
  (id: number): any =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await getDetails(id);
      dispatch(setDetails(response.data));
      dispatch(setIsOpenModal(true));
    } catch (err) {
      return console.log(err);
    }
  };

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails(state, action: PayloadAction<DetailsStateProps>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.stats = action.payload.stats;
      state.types = action.payload.types;
    },
    setIsOpenModal(state, action: PayloadAction<boolean>) {
      state.isOpenModal = action.payload;
    }
  }
});

export const { setDetails, setIsOpenModal } = detailsSlice.actions;
export default detailsSlice.reducer;
