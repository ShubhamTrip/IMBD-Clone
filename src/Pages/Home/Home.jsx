import React,{useEffect,useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';
import TypeList from '../../Components/TypeList/TypeList';
import './Home.css';
export default function Home(){

    let [popularMovies,setPopularMovies]=useState([]);
    useEffect(()=>{
        let cont=fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then(res=> res.json());
        cont.then(data=> setPopularMovies(data.results));
    },[])

    return(
        <div className='poster'> 
          <Carousel showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}>
            {
                popularMovies.map(movie =>(
                   <Link to={`/movie/${movie.id}`}>
                    <div className='posterImage'>
                       <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                    </div>
                    <div className='posterImage_description'>
                        <div className='description_left'>
                          <div className='movie_title'>{movie ? movie.original_title: ""}</div>
                          <div className='movie_date'>Released on: {movie ? movie.release_date: ""}</div>
                          <div className='movie_rating'>Rating: {movie ? movie.vote_average:"" }<span><i class="fa fa-star" aria-hidden="true"/></span></div>
                        </div>
                        <div className='description_right'>
                            <p className='description_right_head'>OverView</p>
                            <p className='description_right_text'>{movie ? (movie.overview.length>230 ? movie.overview.slice(0,230)+"..." : movie.overview.slice(0,230)) : ( "")}</p>
                        </div>
                    </div>
                   </Link>
                ))
            }
          </Carousel>
          <TypeList/>
        </div>
    );
}