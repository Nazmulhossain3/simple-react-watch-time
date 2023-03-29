import React from "react";

const SingleCart = ({movie,handleWatchTime}) => {
    
  return (
    <div>
      <div className="movie-cart text-center border mt-4 p-4">
        <div className="movie-poster w-50  m-auto">
          <img
            className="w-25"
            src={movie.poster}
            alt=""
          />
        </div>

        <h3 className="text-center">movie : {movie.movieName}</h3>
        <p>
          description : {movie.description}
        </p>

        <div className="timeWatch-rating d-flex justify-content-around">
          <p>Watching : {movie.watchTime}</p>
          <p>Rating : {movie.imdbRating}</p>
        </div>
        <button onClick={()=>handleWatchTime(movie.watchTime)} className="btn btn-info w-50">Book Now</button>
      </div>
    </div>
  );
};

export default SingleCart;
