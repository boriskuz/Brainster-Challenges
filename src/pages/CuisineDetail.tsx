import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantCard from '../components/RestaurantCard';
import Error from './Error';

const CuisineDetail = () => {
  const { cuisine } = useParams();
  const { restaurants } = useContext(RestaurantsContext);

  const restaurantCuisine = restaurants.filter((restaurant) => restaurant.restauranttype === cuisine);
  console.log(restaurantCuisine);

  return (
    <>
      {restaurantCuisine.length > 0 ? (
        <div className="row text-center section">
          <div className="col">
            <h2 className="text-uppercase mb-5">{cuisine} restaurants</h2>
            <div className="row row-cols-5">
              {restaurantCuisine.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Error />
        </>
      )}
    </>
  );
};

export default CuisineDetail;
