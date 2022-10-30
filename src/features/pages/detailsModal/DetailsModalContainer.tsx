import React from 'react';
import { setIsOpenModal } from '../../../store/slices/detailsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import DetailsModal from './DetailsModal';

const DetailsModalContainer = () => {
  const datails = useAppSelector((state) => state.datails);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setIsOpenModal(false));
  };

  return (
    <DetailsModal
      name={datails.name}
      id={datails.id}
      open={datails.isOpenModal}
      stats={datails.stats}
      types={datails.types}
      handleClose={handleClose}
    />
  );
};

export default DetailsModalContainer;
