import logo from '../img/logo.png';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" />
          </a>
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
          <div className="collapse navbar-collapse v-align" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 nav-links ">
              <li className="nav-item">
                <a className="nav-link active text-uppercase fw-bold" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-bold" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-bold" href="/">
                  Gear
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-bold" href="/">
                  Parts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-bold" href="/">
                  Tires
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-bold" href="/">
                  Service-info
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-bold" href="/">
                  Catalogues
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-bold" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-icons">
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-bold" aria-current="page" href="/">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-bold" href="/">
                  <i className="fa-solid fa-bag-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col">
          <header>
            <h1 className="header-title">Bikes</h1>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
