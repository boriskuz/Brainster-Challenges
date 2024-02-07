import { useContext } from 'react';
import { Restaurant } from '../interfaces/interfaces';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useAverageRating } from '../hooks/useAverageRating';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const { handleFavorites, favorites } = useContext(RestaurantsContext);

  const rating = useAverageRating(restaurant);

  const isFavorite = favorites.includes(restaurant.id);

  return (
    <div className="col mb-3">
      <Link className="card-link" to={`/restaurant/${restaurant.businessname}`}>
        <div className="card">
          <div className="card-image ">
            <img src={restaurant.image} className="card-img-top" alt={restaurant.businessname} />
          </div>
          <div className="card-body text-start bg-light">
            <h5 className="card-title fw-bold">{restaurant.businessname}</h5>
            <h6 className="card-subtitle mb-4 color-orange-cs">{restaurant.restauranttype}</h6>
            <p className="card-text small m-0">{rating > 0 ? `rating - ${rating},` : ''}</p>
            <p className="card-text small">{restaurant.reviews > 0 ? `based on ${restaurant.reviews} reviews` : ''}</p>
            <i className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart fs-2 color-orange-cs card-heart`} onClick={(e) => handleFavorites(e, restaurant.id)}></i>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
