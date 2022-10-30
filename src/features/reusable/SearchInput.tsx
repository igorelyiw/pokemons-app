import { TextFieldProps, TextField } from '@mui/material';
import React from 'react';

const SearchInput = (props: TextFieldProps) => {
  return (
    <TextField
      sx={{ background: 'white', borderRadius: '4px' }}
      {...props}
      label="Search pokemon"
      variant="outlined"
    />
  );
};

export default SearchInput;
