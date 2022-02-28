import { React, useEffect, useState, useRef }  from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './index.css';
import MovieCard from '../../components/MovieCard';
import { url } from '../../assets/constants';

SearchResults.propTypes = {
    keyword: PropTypes.string
};

export default function SearchResults( { keyword } ){
    const [moviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const lastItemRef = useRef();
    const observer = useRef();
    const [movies, setMovies] = useState(moviesList);

    const fetchData = () => {
        setLoading(true);
        axios({
            method: "get",
            url: url,
        }).then((res)=>{
            setMoviesList([...moviesList, ...res.data.results]);
            setMovies(moviesList);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
        });
    };

    useEffect(()=>{
        if(keyword!==''){
            const results = moviesList.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()));
            setMovies(results);
        } else{
            setMovies(moviesList);
        }
    }, [keyword]);

    useEffect(() => {
        const options = {
          root: document,
          rootMargin: "20px",
          threshold: 1
        };
        const callback = (movies) => {
            if (movies[0].isIntersecting) {
                fetchData();
            }
        };
        observer.current = new IntersectionObserver(callback, options);
        if (lastItemRef.current) {
            observer.current.observe(lastItemRef.current);
        }
        return () => {
            observer.current.disconnect();
        };
    });

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <div>
            <div className='card_div'>
                {
                    movies.map((movie, index) => (
                        <div key={index} className='card' ><MovieCard  movie={movie} /></div>
                ))
            }
            </div>
            {keyword===''&&<p ref={lastItemRef} style={{textAlign: 'center'}}>Loading movies...</p>}
            {movies.length===0&&keyword!==''&&<h2 style={{textAlign: 'center'}}>No movies found...</h2>}
        </div>
    );
}