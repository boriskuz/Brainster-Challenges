import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to="/" className="text-decoration-none">
      <div className="row navbar">
        <h1 className="text-uppercase text-white text-center fs-3 fw-bold">Music db</h1>
      </div>
      <div className="row">
        <div className="bar"></div>
      </div>
    </Link>
  );
};

export default Navbar;
