import { Place } from './PlacesContainer';

interface PlaceProps {
  place: Place;
}

const PlaceComponent = ({ place }: PlaceProps) => {
  return (
    <div className="place-component">
      <img src={place.img} alt="" />
      <div className="text-container">
        <h2>{place.place}</h2>
        <p>{place.desc}</p>
      </div>
    </div>
  );
};

export default PlaceComponent;
