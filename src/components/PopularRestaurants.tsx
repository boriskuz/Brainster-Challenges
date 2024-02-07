import { useContext } from 'react';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantCard from './RestaurantCard';

const PopularRestaurants = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const popularRestaurants = restaurants.slice(0, 10);
  return (
    <div className="row section">
      <div className="col">
        <h2 className="text-uppercase text-center mb-5">Our most popular restaurants</h2>
        <div className="row row-cols-5">
          {popularRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularRestaurants;
