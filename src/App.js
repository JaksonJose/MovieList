import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppContainer } from './Styles';
import './App.css';

function App() {
  return (
    <AppContainer>
        <Routes />
        <ToastContainer autoClose={3000} />
    </AppContainer>
  );
}

export default App;
