import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

const Header: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const { pathname } = useRouter();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleModal = () => {
    setModalActive(!modalActive);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push({
      pathname: '/search',
      ...(inputRef.current?.value
        ? {
            query: {
              searchTerm: inputRef.current.value,
            },
          }
        : undefined),
    });

    setModalActive(!modalActive);
  };

  return (
    <>
      <header className="header-v4">
        <div className="container-menu-desktop ">
          <div className="top-bar fixed-top">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">Free shipping for standard order over $100</div>

              <div className="right-top-bar flex-w h-full">
                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  Help & FAQs
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  My Account
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  EN
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  USD
                </a>
              </div>
            </div>
          </div>
          <div className="wrap-menu-desktop how-shadow1">
            <nav className="limiter-menu-desktop container">
              <Link href="/">
                <a className="logo">
                  <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
                </a>
              </Link>

              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className={`${pathname === '/' ? 'active-menu' : ''}`}>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>

                  <li className={`${pathname === '/shop' ? 'active-menu' : ''}`}>
                    <Link href="/shop">
                      <a>Shop</a>
                    </Link>
                  </li>

                  <li className={`${pathname === '/blog' ? 'active-menu' : ''}`}>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>

                  <li className={`${pathname === '/about' ? 'active-menu' : ''}`}>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="wrap-icon-header flex-w flex-r-m h-full">
                <div className="flex-c-m h-full p-r-24">
                  {/* make a click event listener on this div to show the search */}
                  <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11" onClick={handleModal}>
                    <i className="zmdi zmdi-search"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* use show-modal-search class on this div to toggle the search*/}
        <div className={`modal-search-header flex-c-m trans-04 js-hide-modal-search ${modalActive ? 'show-modal-search' : ''}`}>
          <div className="container-search-header">
            {/* close the search on this button on click */}
            <button className="flex-c-m btn-hide-modal-search trans-04" onClick={handleModal}>
              <img src="../../images/icons/icon-close2.png" alt="CLOSE" />
            </button>

            <form className="wrap-search-header flex-w p-l-15" onSubmit={handleSubmit}>
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input className="plh3" type="text" name="search" placeholder="Search..." ref={inputRef} />
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
