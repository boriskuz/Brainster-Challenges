import { useContext } from 'react';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantCard from './RestaurantCard';

const AllRestaurants = () => {
  const { restaurants } = useContext(RestaurantsContext);

  return (
    <div className="row section">
      <div className="col">
        <h2 className="text-uppercase text-center mb-5">All restaurants</h2>
        <div className="row row-cols-5">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRestaurants;
