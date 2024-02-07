import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('/images/bg-01.jpg')" }}>
      <h2 className="ltext-105 cl0 txt-center">{title}</h2>
    </section>
  );
};

export default PageTitle;
