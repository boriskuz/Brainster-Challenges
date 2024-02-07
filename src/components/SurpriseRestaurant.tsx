import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';

const SurpriseRestaurant = () => {
  const { restaurants } = useContext(RestaurantsContext);

  const randomIndex = Math.floor(Math.random() * restaurants.length);
  const randomRestaurant = restaurants[randomIndex];

  return (
    <div className="row text-center section">
      <div className="col">
        <h2 className="text-uppercase mb-4">Don't know what to eat?</h2>
        <Link className="btn btn-success form-control" to={`/restaurant/${randomRestaurant?.businessname}`}>
          Surprise me!
        </Link>
      </div>
    </div>
  );
};

export default SurpriseRestaurant;
