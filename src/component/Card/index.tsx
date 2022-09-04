import React from 'react';
import { MovieType } from '../../common/types';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.css';

export type MovieCardData = Omit<
  MovieType,
  'overview' | 'vote_average' | 'release_date' | 'runtime' | 'genres'
>;

const Card = (movieData: MovieCardData) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card card-block">
        <h4 className="icon-fav">
          <i>
            <AiOutlineStar size={24} />
          </i>
        </h4>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt={movieData.original_title}
        />
        <Link to={`/movie/${movieData.id}`} style={{ textDecoration: 'none' }}>
          <h5 className="card-title mt-3 mb-3">{movieData.original_title}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Card;
