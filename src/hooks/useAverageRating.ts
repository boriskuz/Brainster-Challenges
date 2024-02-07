import { Restaurant } from '../interfaces/interfaces';

export const useAverageRating = (restaurant: Restaurant | undefined) => {
  if (restaurant === undefined) {
    const rating = 0;
    return rating;
  } else {
    const sumStars = restaurant.reviewsList.reduce((sum, review) => sum + review.stars, 0);
    const rating = restaurant.reviewsList.length > 0 ? sumStars / restaurant.reviewsList.length : 0;
    return rating;
  }
};
