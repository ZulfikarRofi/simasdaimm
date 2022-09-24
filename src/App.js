import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/assets/style.css'
import { Route, Routes } from 'react-router-dom';
import LandingPages from './components/pages/LandingPages';
import LoginPage from './components/pages/LoginPage';
import NewsPage from './components/pages/NewsPage';
import PublishPage from './components/pages/PublishPage';
import ContentList from './components/pages/ContentList';
import DataKader from './components/pages/DataKader';
import ProfilePage from './components/pages/ProfilePage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPages />} />
      <Route exact path='/login' element={<LoginPage />} />
      <Route exact path='/profile' element={<ProfilePage />} />
      <Route exact path='/publish' element={<PublishPage />} />
      <Route exact path='/kader' element={<DataKader />} />
      <Route exact path='/list-content' element={<ContentList />} />
      <Route exact path='/news/:id' element={<NewsPage />} />
    </Routes>
  );
}

export default App;

