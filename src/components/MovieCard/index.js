import * as React from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { months, imageUrl } from '../../assets/constants';

MovieCard.propTypes = {
    movie: PropTypes.object
};

export default function MovieCard({ movie }) {
    const imgUrl = `${imageUrl}/${movie.backdrop_path}`;
    const [year, month, day] = movie.release_date.split('-');
    return(
        <div>
            <div style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                <img
                    height="auto"
                    src={imgUrl}
                    width="100%"
                    alt="movie poster"
                    
                />
                <div style={{ padding: "10px 20px" }}>
                <h2 style={{ color: "#333366", overflow: "hidden", whiteSpace: "nowrap", margin: "0" }} >{movie.title}</h2>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"  }}>
                    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}} spacing={1}>
                        <FavoriteIcon color="error"/>
                        <p style={{marginLeft: "4px"}}>{movie.vote_average}</p>
                    </div>
                    <p>{movie.vote_count} votes</p>
                    <p>{`${months[Number(month)-1]} ${day}, ${year}`}</p>
                </div>
                </div>
            </div>
        </div>
    );
}