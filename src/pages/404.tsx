import Link from 'next/link';
import React from 'react';

const Error = () => {
  return (
    <div className="container bg0 p-t-60 p-b-90 text-center">
      <h2 className="p-b-66">404 - Page could not be found</h2>
      <p>
        Please go to <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default Error;
