import AllRestaurants from '../components/AllRestaurants';
import Cuisines from '../components/Cuisines';
import PopularRestaurants from '../components/PopularRestaurants';
import SurpriseRestaurant from '../components/SurpriseRestaurant';

const Homepage = () => {
  return (
    <>
      <SurpriseRestaurant />
      <PopularRestaurants />
      <Cuisines />
      <AllRestaurants />
    </>
  );
};

export default Homepage;
