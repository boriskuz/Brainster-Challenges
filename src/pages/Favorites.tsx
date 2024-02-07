import { useContext } from 'react';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantCard from '../components/RestaurantCard';

const Favorites = () => {
  const { restaurants, favorites } = useContext(RestaurantsContext);
  const favoriteRestaurants = restaurants.filter((restaurant) => favorites.includes(restaurant.id));

  return (
    <div className="row text-center section">
      <div className="col">
        <h2 className="text-uppercase mb-5">Your favorite restaurants</h2>
        <div className="row row-cols-1">
          {favoriteRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
