import { Link } from 'react-router-dom';
import { HeaderContainer } from './Styles';


export default function Header() {
    return (
        <HeaderContainer>
            <Link to="/" className="logo">Movies List</Link>
            <Link to="/favorite" className="favorite">Saved</Link>
        </HeaderContainer>
    )
}