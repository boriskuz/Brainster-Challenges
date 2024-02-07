import { useParams } from 'react-router-dom';
import artists from '../db';
import AlbumsList from '../components/AlbumsList';
import ErrorPage from './ErrorPage';

const ArtistPage = () => {
  const { id } = useParams();
  const artist = artists.find((el) => el.id.toString() === id);

  return (
    <>
      {artist ? (
        <div className="row">
          <div className="col">
            <div className="row mt-4 mb-2 justify-content-center">
              <div className="col-5">
                <img src={`/images/covers/${artist.cover}.jpg`} alt={artist.name} />
              </div>
            </div>
            <h4 className="text-center fw-bold">{artist.name}</h4>
            <p className="text-center mt-3">{artist.bio}</p>
            <div className="row">
              <div className="col">
                <div className="d-flex flex-wrap">
                  {artist.albums.map((album) => (
                    <AlbumsList key={album.albumId} album={album} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default ArtistPage;
