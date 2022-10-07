import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

import CallingWhite from '../assets/svg/inline/calling_white.svg'

const Contact = () => (
  <Layout pageColor="purple">
    <section className="mb-5">
      <div className="container hero hero-header hero-contact">
        <div className="row">
          <div className="col text-center">
            <h1 className="mb-4">Contact</h1>
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
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <div className="row">
          <div className="contact-form col-8 offset-2 bg-white p-5 rounded-5">
            <div className="px-4">
              <div className="row mb-4">
                <div className="col">
                  <label htmlFor="nom" class="form-label text-uppercase">
                    Nom / Prénom
                  </label>
                  <input
                    class="form-control"
                    id="nom"
                    placeholder="Entrez votre nom..."
                  />
                </div>
                <div className="col">
                  <label htmlFor="mail" class="form-label text-uppercase">
                    E-mail
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="mail"
                    placeholder="Votre adresse e-mail..."
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <label htmlFor="soins" class="form-label text-uppercase">
                    Type de soins
                  </label>
                  <select class="form-select" id="soins">
                    <option value="pansement" selected>
                      Pansement
                    </option>
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
                    <option value="hygiène-confort">Hygiène et confort</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="ville" class="form-label text-uppercase">
                    Ville
                  </label>
                  <input
                    class="form-control"
                    id="ville"
                    placeholder="Votre ville..."
                  />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col">
                  <label htmlFor="message" class="form-label text-uppercase">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="4"
                    placeholder="Décrivez l'objet de votre demande..."
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="contact-icon me-3">
                      <CallingWhite />
                    </div>
                    <div className="fw-bold">
                      <div className="text-purple">En cas d'urgence</div>
                      <a className="nav-link py-1" href="tel:+33608898659">
                        +33 6 08 89 86 59
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <button className="btn btn-purple w-100">Prendre RDV</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>

    <section className="mb-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col text-center">
            <strong className="text-purple text-uppercase text-badge ">
              <small>Le cabinet</small>
            </strong>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-6 offset-3 text-center">
            <h2>Cabinet ouvert le mardi et le jeudi sur rendez-vous</h2>
          </div>
        </div>

        <div className="row pb-5">
          <div className="col-8 offset-2">
            <a
              className="nav-link"
              href="https://maps.google.com/maps/dir//19+Pl.+des+Vosges+56860+S%C3%A9n%C3%A9/@47.6503169,-2.72102,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x48101de107715771:0x48c56ad24484755"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card rounded-5">
                <div className="card-img-top mb-4">
                  <div className="row g-0">
                    <div className="col-7">
                      <StaticImage
                        className="img-border-left mt-4 ms-4"
                        src="../assets/images/image_40.jpg"
                        alt=""
                        style={{ height: 410 }}
                        placeholder="blurred"
                      />
                    </div>
                    <div className="col-5">
                      <StaticImage
                        className="img-border-right mt-4 me-4"
                        src="../assets/images/map.jpg"
                        alt=""
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

export default Contact

export const Head = () => (
  <title>Contact - Caroline Jomard Serbin, Infirmière libérale à Séné</title>
)
