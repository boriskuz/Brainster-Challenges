import { useParams } from 'react-router-dom';
import artists from '../db';
import ErrorPage from './ErrorPage';

const AlbumPage = () => {
  const { id, albumId } = useParams();

  const artist = id && artists.find((artist) => artist.id === +id);

  const album = artist && artist.albums.find((album) => album.albumId === albumId);

  return (
    <>
      {album ? (
        <div className="row">
          <div className="col text-center album-details">
            <div className="row justify-content-center mt-4 mb-2">
              <div className="col-5">
                <img src={`/images/albums/${album.cover}.jpg`} alt={album.title} />
              </div>
            </div>
            <p>
              <span className="fw-bold">Title: </span>
              {`${album.title}`}
            </p>
            <p>
              <span className="fw-bold">Year: </span>
              {`${album.year}`}
            </p>
            <p>
              <span className="fw-bold">Price: </span>
              {`${album.price} $`}
            </p>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default AlbumPage;
