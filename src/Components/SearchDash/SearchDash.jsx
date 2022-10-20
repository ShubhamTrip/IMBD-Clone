import React,{useEffect} from 'react';
import './SearchDash.css';
export default function SearchDash(prop){
    useEffect(() => {
      
        console.log('Hello');
     
    },[prop.data]);
    return (
        <div className='SearchDash' style={prop.style}>
          <h1>Hello</h1>
        </div>
        
    );
}