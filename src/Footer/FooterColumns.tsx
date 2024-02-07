import React from 'react';

interface FooterColumnsProps {
  title: string;
  links: string[];
}

const FooterColumns = ({ title, links }: FooterColumnsProps) => {
  return (
    <div className="col-sm-3 footer__columns">
      <h4>{title}</h4>
      <div className="list-group">
        {links.map((link, index) => (
          <a key={index} href="/" className="list-group-item">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterColumns;
