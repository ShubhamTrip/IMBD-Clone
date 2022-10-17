import React,{useEffect,useState} from 'react';

export default function Home(){

    let [popularMovies,setPopularMovies]=useState([]);
    useEffect(()=>{
        let cont=fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then(res=> res.json());
        cont.then(data=> setPopularMovies(data.results));
        console.log(popularMovies);
    },[])

    return(
        <div>
            Home Page
        </div>
    );
}