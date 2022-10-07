import React from 'react'
import { Link } from 'gatsby'

import Logo from '../assets/svg/inline/LOGO-CJS.svg'

const Header = ({ pageColor }) => (
  <header className="navbar py-4">
    <nav className="container">
      <Link className="navbar-brand" to="/">
        <Logo width="204" />
      </Link>
      <ul className="navbar-nav flex-row">
        <li className="nav-item">
          <Link
            className="nav-link py-2 px-5 fw-bold"
            activeClassName="active"
            to="/"
          >
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link py-2 px-5 fw-bold"
            activeClassName="active"
            to="/a-propos"
          >
            À propos
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link py-2 px-5 fw-bold"
            activeClassName="active"
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <a href="/contact#formulaire" className={`btn btn-${pageColor}`}>
        Prendre RDV
      </a>
    </nav>
  </header>
)

export default Header
