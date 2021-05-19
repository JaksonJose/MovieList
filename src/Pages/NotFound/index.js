import { Link } from 'react-router-dom';
import { NotFoundContainer } from './Styles';

export default function NotFound() {
    return(
        <NotFoundContainer>
            <h1>404</h1>
            <h2>Page not found.</h2>
            <Link to="/">Back to Movies List</Link>
        </NotFoundContainer>
    )
}