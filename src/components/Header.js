import React, { useState } from 'react'
import { Link } from 'gatsby'

import Logo from '../assets/svg/inline/LOGO-CJS.svg'
import ThreeDots from '../assets/svg/inline/threedots.svg'

const Header = ({ pageColor }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleNavbar = () => setNavbarOpen(!navbarOpen)

  return (
    <header className="navbar py-4">
      <nav
        className="container flex-wrap flex-lg-nowrap"
        aria-label="Navigation principale"
      >
        <div className="d-lg-none" style={{ width: '2.625rem' }} />
        <Link
          className="navbar-brand me-0 me-lg-2"
          to="/"
          aria-label="Caroline Jomard Serbin"
        >
          <Logo width="204" role="img" />
        </Link>
        <div className="d-flex">
          <button
            className={`navbar-toggler navbar-toggler-${pageColor} d-flex d-lg-none order-3 p-2`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#bdNavbar"
            aria-controls="bdNavbar"
            aria-label="Toggle navigation"
            onClick={handleNavbar}
          >
            <ThreeDots style={{ width: '1.5rem', height: '1.5rem' }} />
          </button>
        </div>

        <div
          className={`offcanvas-lg offcanvas-end flex-grow-1 d-flex justify-content-end bg-${pageColor} ${
            navbarOpen ? 'show' : ''
          }`}
          aria-labelledby="bdNavbarOffcanvasLabel"
        >
          <div className="offcanvas-header px-4 pb-0">
            <h5
              className="offcanvas-title text-white"
              id="bdNavbarOffcanvasLabel"
            >
              Caroline Jomard Serbin
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Fermer"
              onClick={handleNavbar}
            ></button>
          </div>

          <div className="offcanvas-body p-4 pt-0 p-lg-0 m-lg-auto">
            <hr class="d-lg-none text-white-50" />
            <ul className="navbar-nav flex-row flex-wrap d-flex align-items-center">
              <li className="nav-item col-12 col-lg-auto">
                <Link
                  className="nav-link py-2 px-0 py-lg-2 px-lg-5 mb-3 mb-lg-0 fw-bold"
                  activeClassName="active"
                  to="/"
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item col-12 col-lg-auto">
                <Link
                  className="nav-link py-2 px-0 py-lg-2 px-lg-5 mb-3 mb-lg-0 fw-bold"
                  activeClassName="active"
                  to="/a-propos"
                >
                  À propos
                </Link>
              </li>
              <li className="nav-item col-12 col-lg-auto">
                <Link
                  className="nav-link py-2 px-0 py-lg-2 px-lg-5 mb-3 mb-lg-0 fw-bold"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <a
              href="/contact#formulaire"
              className={`btn offcanvas-btn-${pageColor} d-lg-none w-100 mt-5`}
            >
              Prendre RDV
            </a>
          </div>
        </div>

        <a
          href="/contact#formulaire"
          className={`btn btn-${pageColor} d-none d-lg-block`}
        >
          Prendre RDV
        </a>
      </nav>
    </header>
  )
}

export default Header
