import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container section">
        <Link to="/" className="navbar-brand text-uppercase fw-bold">
          Restaurant
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="ms-auto" to="/favorites">
            <i className="fa-solid fa-heart heart-icon color-orange-cs"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
