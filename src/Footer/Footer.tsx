import React from 'react';
import FooterColumns from './FooterColumns';

const Footer = () => {
  const eventInfoLinks = ['Enter Now', 'Event Info', 'Course Maps', 'Race Pack', 'Results', 'FAQs', 'Am I Registered?'];
  const registrationLinks = ['Volunteers', 'Gallery', 'Press', 'Results', 'Privacy Policy', 'Service Plus', 'Contacts'];
  const scheduleLinks = ['Gallery', 'About', 'Videos', 'Results', 'FAQs', 'Results', 'Volunteers'];

  return (
    <>
      <div className="col-sm-3">
        <h4>Social share</h4>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <FooterColumns title="Event Info" links={eventInfoLinks} />
      <FooterColumns title="Registration" links={registrationLinks} />
      <FooterColumns title="Schedule" links={scheduleLinks} />
    </>
  );
};

export default Footer;
