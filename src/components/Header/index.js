import * as React from 'react';
import { Container, Typography } from '@mui/material';

export default function Header(){
    return(
        <Container>
            <Typography variant='h4' textAlign="center" sx={{padding: 2, fontWeight: "bold"}} >Movies List</Typography>
        </Container>        
    );
}