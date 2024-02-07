import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { RestaurantsProvider } from './context/RestaurantsContext';
import CuisineDetail from './pages/CuisineDetail';
import Favorites from './pages/Favorites';
import RestaurantDetail from './pages/RestaurantDetail';
import Error from './pages/Error';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Navbar />
          <RestaurantsProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cuisine/:cuisine" element={<CuisineDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/restaurant/:restaurantName" element={<RestaurantDetail />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </RestaurantsProvider>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
