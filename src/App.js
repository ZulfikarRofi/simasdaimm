import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPages from './components/pages/LandingPages';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPages />} />
    </Routes>
  );
}

export default App;
