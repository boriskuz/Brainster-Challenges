import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="row text-center section py-5">
      <div className="col">
        <h2 className="text-uppercase">404 - Page not found</h2>
        <p className="mt-4">
          The requested URL was not found. Click the link to go to{' '}
          <Link to="/" className="text-decoration-none color-orange-cs">
            Homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
