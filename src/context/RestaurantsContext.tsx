import { ReactNode, createContext, useEffect, useState } from 'react';
import { Restaurant } from '../interfaces/interfaces';

interface ContextData {
  restaurants: Restaurant[];
  cuisines: string[];
  favorites: string[];
  handleFavorites: (e: React.MouseEvent, restaurant: string) => void;
  addedNewReview: boolean;
  setAddedNewReview: (state: boolean) => void;
}

export const RestaurantsContext = createContext({} as ContextData);

export const RestaurantsProvider = ({ children }: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [addedNewReview, setAddedNewReview] = useState<boolean>(false);

  const calculateAverageRating = (restaurant: Restaurant) => {
    const sumStars = restaurant.reviewsList.reduce((sum, review) => sum + review.stars, 0);
    const rating = restaurant.reviewsList.length > 0 ? sumStars / restaurant.reviewsList.length : 0;
    return rating;
  };

  useEffect(() => {
    fetch('http://localhost:5001/restaurants')
      .then((res) => res.json())
      .then((data: Restaurant[]) => {
        const sortedData = data.sort((a, b) => {
          if (b.reviews !== a.reviews) {
            return b.reviews - a.reviews;
          }

          const avgRatingA = calculateAverageRating(a);
          const avgRatingB = calculateAverageRating(b);

          return avgRatingB - avgRatingA;
        });

        setRestaurants(sortedData);
        setCuisines(sortedData && [...new Set(sortedData.map((el: Restaurant) => el.restauranttype))]);
      });

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites) {
      setFavorites(favorites);
    }
    setAddedNewReview(false);
  }, [addedNewReview]);

  const handleFavorites = (e: React.MouseEvent, restaurantId: string) => {
    e.preventDefault();
    if (favorites.includes(restaurantId)) {
      const updatedFavorites = favorites.filter((favorite) => favorite !== restaurantId);
      setFavorites(updatedFavorites);
    } else {
      setFavorites([...favorites, restaurantId]);
    }
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        cuisines,
        favorites,
        handleFavorites,
        addedNewReview,
        setAddedNewReview,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
