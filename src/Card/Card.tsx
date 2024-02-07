import { Products } from '../App';

const Card = ({ products }: Products) => {
  return (
    <div id="cardHolder" className="row">
      {products?.map((bike, index) => {
        return (
          <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <img src={require(`../img/${bike.image}.png`)} className="card-img-top" alt={bike.name} />
              </div>

              <div className="card-footer">
                <h6 className="card-title fw-bold">{bike.name}</h6>
                <p className="card-text">{bike.price} $</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
