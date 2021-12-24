import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Stack, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MovieCard({ movie }) {
    const imageUrl = `http://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    const months = ["January","February","March","April","May","June","July", "August", "September", "October", "November", "December"];
    const [year, month, day] = movie.release_date.split('-');
    return(
        <Card sx={{ width: '30%', margin: '10px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: "bold"}} color="primary">
                    {movie.title}
                </Typography>
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                    <Stack direction="row" spacing={1}>
                        <FavoriteIcon color="error"/>
                        <Typography variant="body1">{movie.vote_average}</Typography>
                    </Stack>
                    <Typography variant="body1">{movie.vote_count} votes</Typography>
                    <Typography variant="body2">{`${months[Number(month)-1]} ${day}, ${year}`}</Typography>
                </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}