import ArtistItem from '../components/ArtistItem';
import artists from '../db';

const ArtistsList = () => {
  return (
    <div className="row py-4">
      <div className="col">
        <h2 className="text-center fs-2 fw-bold mb-3 ">Browse the artists</h2>
        {artists.map((artist) => (
          <ArtistItem key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistsList;
