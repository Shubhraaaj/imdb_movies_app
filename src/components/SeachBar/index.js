import * as React from 'react';
import { TextField } from '@mui/material';

export default function SearchBar(){
    return(
        <div>
            <TextField label="Search movies by title..."  variant="standard" fullWidth/>
        </div>
    );
}