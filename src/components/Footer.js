import React from 'react'
import { Link } from 'gatsby'

import LogoWhite from '../assets/svg/inline/LOGO-CJS-WHITE.svg'
import Calling from '../assets/svg/inline/calling.svg'
import Mail from '../assets/svg/inline/mail.svg'
import Location from '../assets/svg/inline/location.svg'

const Footer = () => (
  <footer className="bg-dark pt-4 pt-lg-5">
    <nav className="container">
      <div className="row mt-3 mb-5">
        <div className="col-12 col-lg-6 pe-lg-5 mb-5 mb-lg-0">
          <Link
            className="navbar-brand d-flex d-lg-block justify-content-center"
            to="/"
          >
            <LogoWhite width="204" />
          </Link>

          <div className="text-footer fw-bold mt-3">
            Infirmière libérale à domicile, sous le status d’entrepreneur
            indépendant.
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12 col-lg-4 mb-5 mb-lg-0">
              <small className="d-block text-footer text-uppercase fw-bold mb-3">
                Navigation
              </small>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link py-2 mb-1 fw-bold" to="/">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link py-2 mb-1 fw-bold" to="/a-propos">
                    À propos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link py-2 mb-1 fw-bold" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-8">
              <small className="d-block text-footer text-uppercase fw-bold mb-4">
                Contact & information
              </small>

              <ul className="navbar-nav">
                <li className="nav-item mb-4">
                  <div className="d-flex align-items-center">
                    <div className="footer-icon me-3">
                      <Calling />
                    </div>
                    <div className="fw-bold">
                      <div className="text-footer">Téléphone</div>
                      <a className="nav-link py-1" href="tel:+33608898659">
                        +33 6 08 89 86 59
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item mb-4">
                  <div className="d-flex align-items-center">
                    <div className="footer-icon me-3">
                      <Mail />
                    </div>
                    <div className="fw-bold">
                      <div className="text-footer">E-mail</div>
                      <a
                        className="nav-link py-1"
                        href="mailto:cjomarf@gmail.com"
                      >
                        cjomarf@gmail.com
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center">
                    <div className="footer-icon me-3">
                      <Location />
                    </div>
                    <div className="fw-bold">
                      <div className="text-footer">Adresse</div>
                      <a
                        className="nav-link py-1"
                        href="https://maps.google.com/maps/dir//19+Pl.+des+Vosges+56860+S%C3%A9n%C3%A9/@47.6503169,-2.72102,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x48101de107715771:0x48c56ad24484755"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        19 rue des Vosges, 56860 SENE
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-footer">©CarolineJomardSerbin</div>
    </nav>
  </footer>
)

export default Footer
