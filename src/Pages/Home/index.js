import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../Services/Api';
import { MovieListContainer, MoiveList } from './Style';

export default function Home () {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function LoadMovie() {
            const response = await Api.get(`r-api/?api=filmes`);
            setMovies(response.data);
        }

        LoadMovie();

    }, [])


    return (
        <MovieListContainer>
            <MoiveList>
                {movies.map((movie)=>{
                    return (
                        <article key={movie.id}>
                            <strong>{movie.nome}</strong>
                            <img src={movie.foto} alt={movie.nome} />
                            <Link to={`/movie/${movie.id}`}>Go to movie</Link>
                        </article>
                    );
                })}
            </MoiveList>
        </MovieListContainer>
    )
}