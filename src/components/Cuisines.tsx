import { useContext } from 'react';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { Link } from 'react-router-dom';

const Cuisines = () => {
  const { cuisines } = useContext(RestaurantsContext);

  return (
    <div className="row text-center section">
      <div className="col">
        <h2 className="text-uppercase">Cuisines</h2>
        <div className="mt-4">
          {cuisines.map((cuisine, index) => (
            <Link to={`/cuisine/${cuisine}`} key={index} className="btn px-4 me-3 text-white bg-orange-cs">
              {cuisine}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cuisines;

// (
//   <button key={el.id} className="btn orange-bg-cs">
//     {el.restauranttype}
//   </button>
// )
