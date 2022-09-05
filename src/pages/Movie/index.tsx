import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchMovieById from '../../service/fetchMovie';
import { FiArrowLeft } from 'react-icons/fi';

const Movie = () => {
  const { id } = useParams();
  const { data: movie } = useFetchMovieById(id || '');
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="header">
          <FiArrowLeft size={24} onClick={() => navigate('/')} />
        </div>
        <div className="movie-card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-5 col-md-4 col-sm-6">
                <div className="white-box">
                  <div className="poster">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                      alt={movie?.original_title}
                      className="img-responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
