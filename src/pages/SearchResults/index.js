import { React, useEffect, useState, useRef }  from 'react';
import axios from 'axios';
import { Container, Button, Stack, Box } from '@mui/material'; 
import MovieCard from '../../components/MovieCard';
import { useInView } from 'react-intersection-observer';

export default function SearchResults(){
    const [moviesList, setMoviesList] = useState([]);
    const newList = [{
        "adult":false,
        "backdrop_path":"/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
        "genre_ids":[28,12,878],
        "id":634649,
        "original_language":"en",
        "original_title":"Spider-Man: No Way Home",
        "overview":"Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        "popularity":15397.484,
        "poster_path":"/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "release_date":"2021-12-15",
        "title":"Spider-Man: No Way Home",
        "video":false,
        "vote_average":8.5,
        "vote_count":2196},
        {
            "adult":false,
            "backdrop_path":"/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
            "genre_ids":[28,12,878],
            "id":634649,
            "original_language":"en",
            "original_title":"Spider-Man: No Way Home",
            "overview":"Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
            "popularity":15397.484,
            "poster_path":"/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
            "release_date":"2021-12-15",
            "title":"Spider-Man: No Way Home",
            "video":false,
            "vote_average":8.5,
            "vote_count":2196}];
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const lastItemRef = useRef();
    const observer = useRef();
    
    const fetchData = (page) => {
        setLoading(true);
        axios({
            method: "get",
            url: "https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&la"
        }).then((res)=>{
            setMoviesList([...moviesList, ...res.data.results]);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
        });
    };

    useEffect(() => {
        const options = {
          root: document,
          rootMargin: "20px",
          threshold: 1
        };
        const callback = (movies) => {
            if (movies[0].isIntersecting) {
                const newPage = page + 1;
                setMoviesList([
                ...moviesList,
                ...moviesList
                ]);
                setPage(newPage);
            }
        };
        observer.current = new IntersectionObserver(callback, options);
        if (lastItemRef.current) {
            console.log("Reached end");
            observer.current.observe(lastItemRef.current);
        }
        return () => {
            observer.current.disconnect();
        };
    });

    useEffect(()=>{
        fetchData(page);
    },[]);

    // const options = {
    //     threshold: 1
    // };
    
    // const [ref, inView, entry] = useInView(options);
    // const handleObserver = () => {
    //     const y = moviesList[0].boundingClientRect.y;
    //     if (prevY > y) {
    //         this.setPage(page+1);
    //         this.fetchData(page);
    //     }
    //     this.setPrevY(y);
    // };
    // useEffect(()=>{
    //     console.log(inView);
    // },[inView]);
    return(
        <>
            <Box 
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px',
                    bgcolor: 'background.paper'
                }}>
                {
                    moviesList.map((movie, index) => (
                        <div ref={lastItemRef} style={{ width: '30%', margin: '10px' }}><MovieCard key={index} movie={movie} /></div>
                ))
            }
            </Box>
        </>
    );
}