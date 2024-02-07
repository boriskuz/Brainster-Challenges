import { Link } from 'react-router-dom';
import { Album } from '../interfaces';

const AlbumsList = ({ album }: { album: Album }) => {
  return (
    <Link to={`${album.albumId}`} className="album-container">
      <img src={`/images/albums/${album.cover}.jpg`} alt="" />
    </Link>
  );
};

export default AlbumsList;
