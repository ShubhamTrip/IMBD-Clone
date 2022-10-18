import React,{useState,useEffect} from "react";
import {useParams} from 'react-router-dom';
import './TypeList.css'
import Card from "../Card/Card";

export default function TypeList(){
    
    const {type}= useParams();
    
    let [movieList, setList]=useState([])

    useEffect(()=>{
        console.log(type);
       getData();
    },[]);
    
    useEffect(() => {
        getData();
    }, [type]);
    
    const getData=()=>{
        let cont=fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then(res=> res.json());
        cont.then(data=> setList(data.results));
    }
    return (
        <div className="TypeList">
            <h1 className="TypeList_Head">{(type?type: "POPULAR").toUpperCase()}</h1>
            <div className="TypeList_Cards">
                {
                    movieList.map(movie=>(
                        <Card movie={movie}/>
                    ))
                }
            </div>
        </div>
    );
}