import React,{useState,useEffect} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchDash from '../SearchDash/SearchDash';
export default function Header(){
     let [sd,setsd]=useState('none');
     let [dataMov,setDataMov]=useState([]);
     useEffect(() => {
      getData();
     }, []);

     function getData(){
        let arr=[];
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(prop => prop.json()).then(data=>{

         for(let i=0;i<20;i++){
            arr.push(data.results[i].original_title);
         }
         setDataMov(arr);
        });

        
     }
      
     let search;
     function SearchFunc(e){
       search = e.target.value;
       let arr = dataMov.filter(func);

       function func(val){
         for(let i=0;i<search.length;i++){
             if(search[i]!=val[i]){
                  return;
             }
         }
         return val;
       }
       
       
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
              <input type="text" placeholder='Search for the movie by name' onChange={(e)=>{SearchFunc(e)}} onFocus={()=>{setsd('block')}} onBlur={()=>{setsd('none')}}/>
              <button >Search</button>
           </div>
           <SearchDash style={{display:sd}}/>
        </div>
     );

}