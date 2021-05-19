import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Api from '../../Services/Api';
import { MovieInfoContainer } from './Style';

export default function Movie () {

    const { id } = useParams();
    const history = useHistory();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const LoadMovie = async () => {
            const response = await Api.get(`r-api/?api=filmes/${id}`);
            
            //if a user try to access an id that does not exist, redirect to home.
            if(response.data.length === 0){
                history.replace('/');
                return;
            }

            setMovie(response.data);
            setLoading(false);
        }

        LoadMovie();

        return () => console.log('Dismounting component');
    }, [history, id]);

    const SaveMovie = () => {

        const myList = localStorage.getItem('movie');
        let moviesSaved = JSON.parse(myList) || [];

        const hasMovieSaved = moviesSaved.some((moviesaved) => moviesaved.id === movie.id );

        if(hasMovieSaved){
            toast.info("You've already saved this movie!");
            return;
        }

        moviesSaved.push(movie);
        localStorage.setItem('movie', JSON.stringify(moviesSaved));
        toast.info("Movie successully saved.")
    }


    if(loading){
        return (
            <div className="movie-info">
                <h1>Moving is loading...</h1>
            </div>
        )
    }

 
    return(
        <MovieInfoContainer>
            <h1>{movie.nome}</h1>
            <img src={movie.foto} alt={movie.nome} />
            <h3>Sinopse</h3>
            <p>{movie.sinopse}</p>

            <div>
                <button onClick={SaveMovie}>Save to Favorite</button>
                <button>
                    <a target="blank" href={`https://www.youtube.com/results?search_query=${movie.nome} trailer`}>
                        Watch the Trailer
                    </a>
                </button>
            </div>
        </MovieInfoContainer>
    );
}