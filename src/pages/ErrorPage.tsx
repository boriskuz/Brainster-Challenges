import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="row mt-5 text-center">
      <div className="col">
        <h2>404 - Page not found</h2>
        <p className="mt-4">
          Please go to{' '}
          <Link to="/" className="homepage-link">
            Homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
