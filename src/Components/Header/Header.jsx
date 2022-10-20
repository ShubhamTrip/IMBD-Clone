import React,{useState,useEffect} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
// import SearchDash from '../SearchDash/SearchDash';
export default function Header(){
     let [sd,setsd]=useState('none');
     let [dataMov,setDataMov]=useState([]);
   
     useEffect(() => {
      getData();
     },[]);

     function getData(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(prop => prop.json()).then(data=>{
         setDataMov(data.results);
        });

     }
     
     let [search,setSearch]=useState("");

     function SearchFunc(e){
      setSearch(e.target.value);
      
      e.target.value.length>0? setsd('block'):setsd('none');

     }

     return(
        <div className='header'>
            <div className='headerLeft'>
            <Link to='/' style={{textDecoration:'none'}}><img className='header__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="imbd logo" /></Link>
            <Link to='/movies/popular' style={{textDecoration: 'none'}}><span>Popular</span></Link>
            <Link to='/movies/top_rated' style={{textDecoration:'none'}}><span>Top Rated</span></Link>
            <Link to='/movies/upcoming' style={{textDecoration:'none'}}><span>Upcoming</span></Link>
           </div>
           <div className='headerRight'>
              <input type="text" placeholder='Search for the movie by name' onChange={(e)=>SearchFunc(e)} />
              <button >Search</button>
           </div>
           <div className='SearchDash' style={{display:sd}}>
              {
             dataMov.filter((dta)=>(dta.original_title.includes(search)))
             .map((val)=>(
             <Link key={val.id} to={`/movie/${val.id}`} className='searchresults'>{val.original_title}</Link>
             ))}
            
           </div>
        </div>
       );
}