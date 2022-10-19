import React,{useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchDash from '../SearchDash/SearchDash';
export default function Header(){
     let [sd,setsd]=useState('none');
     return(
        <div className='header'>
            <div className='headerLeft'>
            <Link to='/' style={{textDecoration:'none'}}><img className='header__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="imbd logo" /></Link>
            <Link to='/movies/popular' style={{textDecoration: 'none'}}><span>Popular</span></Link>
            <Link to='/movies/top_rated' style={{textDecoration:'none'}}><span>Top Rated</span></Link>
            <Link to='/movies/upcoming' style={{textDecoration:'none'}}><span>Upcoming</span></Link>
           </div>
           <div className='headerRight'>
              <input type="text" placeholder='Search for the movie by name' onFocus={()=>{setsd('block')}} onBlur={()=>{setsd('none')}}/>
              <button >Search</button>
           </div>
           <SearchDash style={{display:sd}}/>
        </div>
     );

}