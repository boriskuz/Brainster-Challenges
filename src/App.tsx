import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ArtistsList from './pages/ArtistsList';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="app-container">
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<ArtistsList />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/artist/:id/:albumId" element={<AlbumPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
