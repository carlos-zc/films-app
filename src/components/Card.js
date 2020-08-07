import React from 'react';
import DefaultImage from '../assets/images/default.jpg';
import { Link } from 'react-router-dom';

const Card = ({movie}) => {
    // Cambia el tamaño de la imagen
    let image = movie.Poster.replace('X300', 'X500');
    if(movie.Poster === 'N/A') {
        image = DefaultImage;
    }
    // const backgroundImageStyle = {
    //     backgroundImage: `url('${DefaultImage}')`,
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover'
    // };
    
    return (
        <article className="card">
            <img src={image} alt={movie.Title} className="card-img-top" width="100" />
            <div className="info">
                <h4>{movie.Title} ({movie.Year})</h4>
                <p>{movie.Type}</p>
                <Link to={"/film/" + movie.imdbID} className="btn btn-secondary">Show more</Link>
            </div>
        </article>
    )
}

export default Card;