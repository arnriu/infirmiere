import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useLocation } from '@reach/router'

import Layout from '../components/Layout'

import CallingWhite from '../assets/svg/inline/calling_white.svg'
import CheckPurple from '../assets/svg/inline/check_purple.svg'

const Contact = () => {
  const location = useLocation()
  const [success, setSuccess] = useState(false)
  const [endAnim, setEndAnim] = useState(true)

  useEffect(() => {
    if (location.search === '?success') {
      setSuccess(true)
      setEndAnim(false)
      setTimeout(() => setSuccess(false), 5000)
      setTimeout(() => setEndAnim(true), 5500)
    }
  }, [location])

  return (
    <Layout pageColor="purple">
      <div
        className={`d-flex align-items-center justify-content-center fixed-top bg-purple-400-blured vw-100 fade ${
          success ? 'vh-100 show' : endAnim ? '' : 'vh-100'
        }`}
        tabindex="-1"
      >
        <div
          className={`text-center bg-white border border-5 border-purple rounded-5 p-5 d-block ${
            success ? '' : endAnim ? 'd-none' : ''
          }`}
        >
          <div className="fs-1 d-inline-flex align-items-center mb-3">
            <CheckPurple
              width="64"
              height="64"
              style={{ marginLeft: -32 }}
              aria-hidden="true"
            />
            <strong>Merci !</strong>
          </div>
          <p>
            Votre demande a bien été prise en compte.
            <br />
            Je reviendrai vers vous dans les plus brefs délais.
          </p>
        </div>
      </div>

      <section className="mb-0 mb-lg-5">
        <div className="container hero hero-header hero-contact">
          <div className="row">
            <div className="col text-center">
              <h1 className="display-1 fw-bold mb-4">Contact</h1>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <p className="mb-5">
                Cabinet infirmier sur rendez-vous le mardi et le jeudi.
                <br />
                Permanence téléphonique de 7h à 22h.
                <br />
                <br />
                Soins à domicile tous les jours y compris dimanches et jours
                fériés.
                <br />
                Réponse rapide et intervention d’urgence dans la journée !
              </p>
            </div>
          </div>
        </div>

        <form
          className="container pb-5"
          method="post"
          action="/contact?success"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <div className="row">
            <div
              className="contact-form col-12 col-lg-8 offset-lg-2 bg-white py-4 p-lg-5 rounded-5"
              id="formulaire"
            >
              <div className="px-4">
                <div className="row mb-4">
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <label htmlFor="nom" className="form-label text-uppercase">
                      Nom / Prénom
                    </label>
                    <input
                      className="form-control"
                      id="nom"
                      name="nom"
                      placeholder="Entrez votre nom..."
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <label htmlFor="tel" className="form-label text-uppercase">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="tel"
                      name="tel"
                      placeholder="Votre numéro de téléphone..."
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <label
                      htmlFor="soins"
                      className="form-label text-uppercase"
                    >
                      Type de soins
                    </label>
                    <select
                      className="form-select"
                      id="soins"
                      name="soins"
                      defaultValue="pansement"
                    >
                      <option value="pansement">Pansement</option>
                      <option value="injections-prélèvements">
                        Injections / Prélèvements
                      </option>
                      <option value="perfusions">Perfusions</option>
                      <option value="traitements">Traitements</option>
                      <option value="pathologies-chroniques">
                        Pathologies chroniques
                      </option>
                      <option value="covid-19">COVID-19</option>
                      <option value="soins-de-stomie">Soins de stomie</option>
                      <option value="hygiène-confort">
                        Hygiène et confort
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-6">
                    <label
                      htmlFor="ville"
                      className="form-label text-uppercase"
                    >
                      Ville
                    </label>
                    <input
                      className="form-control"
                      id="ville"
                      name="ville"
                      placeholder="Votre ville..."
                    />
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-12">
                    <label
                      htmlFor="message"
                      className="form-label text-uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Décrivez l'objet de votre demande..."
                      style={{ resize: 'none' }}
                    ></textarea>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12 col-lg-6 order-2 order-lg-0">
                    <div className="d-flex align-items-center">
                      <div className="contact-icon me-3">
                        <CallingWhite aria-hidden="true" />
                      </div>
                      <div className="fw-bold">
                        <div className="text-purple">En cas d'urgence</div>
                        <a className="nav-link py-1" href="tel:+33608898659">
                          +33 6 08 89 86 59
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <button type="submit" className="btn btn-purple w-100">
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      <section className="mb-lg-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col text-center">
              <strong className="text-purple text-uppercase text-badge ">
                <small>Le cabinet</small>
              </strong>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-lg-6 offset-lg-3 text-lg-center">
              <h2 className="display-2 fw-bold">
                Cabinet ouvert le mardi et le jeudi sur rendez-vous
              </h2>
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-12 col-lg-8 offset-lg-2">
              <a
                className="nav-link contact-map"
                href="https://maps.google.com/maps/dir//19+Pl.+des+Vosges+56860+S%C3%A9n%C3%A9/@47.6503169,-2.72102,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x48101de107715771:0x48c56ad24484755"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card rounded-5">
                  <div className="card-img-top mb-4">
                    <div className="row g-3">
                      <div className="d-none d-lg-block col-7">
                        <StaticImage
                          className="img-border-left mt-4 ms-4"
                          src="../assets/images/image_40.jpg"
                          alt="Photos de l'intérieur du cabinet de Caroline Jomard Serbin"
                          style={{ height: 410 }}
                          placeholder="blurred"
                        />
                      </div>
                      <div className="col-12 col-lg-5 d-flex">
                        <StaticImage
                          className="img-border-right flex-grow-1 mt-4 mx-4 ms-lg-0"
                          src="../assets/images/map.jpg"
                          alt="Carte montrant la localisation du cabinet de Caroline Jomard Serbin"
                          style={{ height: 410 }}
                          placeholder="blurred"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <div className="card-title mb-4">
                      <strong>Centre Paramédical des Vosges</strong>
                    </div>
                    <div className="card-text text-secondary mb-4">
                      19 rue des Vosges, 56860 SENE
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact

export const Head = () => (
  <>
    <title>Contact - Caroline Jomard Serbin, Infirmière libérale à Séné</title>
    <meta
      name="description"
      content="Caroline Jomard Serbin est une infirmière libérale disponible à Séné et ses environs."
    />
  </>
)
