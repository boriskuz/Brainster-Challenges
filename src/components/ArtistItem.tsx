import { Link } from 'react-router-dom';
import { Artist } from '../interfaces';

const ArtistItem = ({ artist }: { artist: Artist }) => {
  return (
    <div className="row">
      <div className="col mb-3">
        <Link to={`/artist/${artist.id}`} className="artist-item">
          <img src={`/images/covers/${artist.cover}.jpg`} alt={artist.name} />
          <p className="fw-bold artist-item-name">{artist.name}</p>
        </Link>
      </div>
    </div>
  );
};

export default ArtistItem;
