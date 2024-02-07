import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useAverageRating } from '../hooks/useAverageRating';
import { Review } from '../interfaces/interfaces';
import Error from './Error';

const RestaurantDetail = () => {
  const { restaurantName } = useParams();
  const { restaurants, setAddedNewReview } = useContext(RestaurantsContext);

  const [formData, setFormData] = useState<Review>({
    id: 0,
    author: '',
    comment: '',
    stars: 0,
  });

  const restaurantDetail = restaurants.find((restaurant) => restaurant.businessname === restaurantName);

  const rating = useAverageRating(restaurantDetail);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'stars') {
      setFormData({ ...formData, [name]: +value });
    } else {
      restaurantDetail && setFormData({ ...formData, [name]: value, id: restaurantDetail.reviewsList.length });
    }
  };

  const isDisabled = !formData.author || !formData.comment || !formData.stars;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (restaurantDetail) {
      const updatedReviewsList = [...restaurantDetail.reviewsList, formData];

      fetch(`http://localhost:5001/restaurants/${restaurantDetail.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...restaurantDetail,
          reviews: restaurantDetail.reviewsList.length + 1,
          reviewsList: updatedReviewsList,
        }),
      });

      setFormData({
        id: 0,
        author: '',
        comment: '',
        stars: 0,
      });

      setAddedNewReview(true);
    }
  };

  return (
    <>
      {restaurantDetail ? (
        <div className="row text-center section">
          <div className="col">
            <h2 className="text-uppercase mb-5">{restaurantDetail.businessname}</h2>
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-detail-image">
                    <img src={restaurantDetail.image} className="card-img-top" alt={restaurantDetail.businessname} />
                  </div>
                  <div className="card-body  text-start bg-light">
                    <p className="card-text small m-0">{rating > 0 ? `rating - ${rating},` : ''}</p>
                    <p className="card-text small">{restaurantDetail.reviews > 0 ? `based on ${restaurantDetail.reviews} reviews` : ''}</p>
                    <p className="card-text small">{restaurantDetail.phone}</p>
                    <p className="card-text small">{restaurantDetail.email}</p>
                    <p className="card-text small">{restaurantDetail.address}</p>
                    <p className="card-text small">{restaurantDetail.parkinglot ? 'We have a parking lot waiting for you' : 'No parking lot available'}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2 className="text-uppercase mb-4">Reviews</h2>
              </div>
            </div>
            {restaurantDetail.reviewsList.length > 0 ? (
              <>
                <div className="row row-cols-1">
                  {restaurantDetail.reviewsList.map((review) => {
                    return (
                      <div key={review.id} className="col mb-3">
                        <div className="card">
                          <div className="card-body  bg-light text-start">
                            <p className="card-text fw-bold">
                              Author: <span className="fw-normal">{review.author}</span>
                            </p>
                            <p className="card-text fw-bold">
                              Message: <span className="fw-normal">{review.comment}</span>
                            </p>
                            <p className="card-text fw-bold">
                              Stars: <span className="fw-normal">{review.stars}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="col">
                <p>
                  <span className="text-capitalize">{restaurantDetail.businessname}</span> awaits your review, be the first to share your thoughts!
                </p>
              </div>
            )}
            <div className="row mt-5">
              <div className="col">
                <h2 className="text-uppercase mb-4">Review form</h2>
              </div>
            </div>
            <div className="row">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" name="author" id="name" value={formData.author} onChange={handleInputChange} />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="comment" className="form-label">
                    Comment
                  </label>
                  <input type="text" className="form-control" name="comment" id="comment" value={formData.comment} onChange={handleInputChange} />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="stars" className="form-label">
                    Stars
                  </label>
                  <input type="range" className="form-range" min="0" max="5" name="stars" id="stars" value={formData.stars} onChange={handleInputChange} />
                </div>
                <button className="btn btn-success form-control mt-4" type="submit" disabled={isDisabled}>
                  Leave a review
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default RestaurantDetail;
