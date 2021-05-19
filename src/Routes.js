import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Favorite from './Pages/Favorite';
import NotFound from './Pages/NotFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/movie/:id" component={Movie} />
                <Route exact path="/favorite" component={Favorite} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;