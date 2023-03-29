import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Home = ({handleWatchTime}) => {

    const [movies,setMovies] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])


    return (
        <div className=''>
          <div className="movie-Container">
           {
            movies.map(movie => <SingleCart movie={movie} handleWatchTime={handleWatchTime}></SingleCart>)
           }
           
        </div>
        </div>
    );
};

export default Home;