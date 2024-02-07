import { useEffect, useState } from 'react';
import PlaceComponent from './PlaceComponent';

export interface Place {
  id: number;
  img: string;
  place: string;
  desc: string;
}

const PlacesContainer = () => {
  const [places, setPlaces] = useState<Place[]>();

  useEffect(() => {
    fetch('http://localhost:5001/places')
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
      });
  }, []);

  return (
    <div className="places-container">
      {places?.map((place) => (
        <PlaceComponent key={place.id} place={place} />
      ))}
    </div>
  );
};

export default PlacesContainer;
