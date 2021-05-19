import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MyMoviesContainer, MovieList } from './Styles';

export default function Favorite () {
    
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        const movieList = localStorage.getItem('movie');
        setMovie(JSON.parse(movieList) || []);

    }, []);

    const DeleteHandle = (id) => {
        let movieFilter = movie.filter((item) => item.id != id );
        setMovie(movieFilter);

        localStorage.setItem('movie', JSON.stringify(movieFilter));
        toast.success('Movie successfully deleted.')
    }

    return (
        <MyMoviesContainer>
            <h1>My Movies</h1>
            {movie.length === 0 && <span>You do not have any movie saved...</span>}
            <MovieList>
                {movie.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.nome}</span>

                            <div>
                                <button><Link to={`/movie/${item.id}`}>See Details</Link></button>
                                <button onClick={ () => DeleteHandle(item.id) }>Delete</button>
                            </div>
                            
                        </li>
                    );
                })}
            </MovieList>
        </MyMoviesContainer>
    )
}