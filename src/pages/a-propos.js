import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Accordion from 'react-bootstrap/Accordion'

import Layout from '../components/Layout'

import Stars from '../assets/svg/inline/stars.svg'
import Pattern from '../assets/svg/inline/pattern.svg'

const APropos = () => (
  <Layout pageColor="red">
    <section className="mb-5">
      <div className="container hero hero-header hero-about">
        <div className="row">
          <div className="col-12 col-lg-6 pt-2 pt-lg-5 mb-5 mb-lg-0">
            <h1 className="display-1 fw-bold mb-4">À propos</h1>
            <p className="mb-3 mb-lg-5">
              En tant qu’infirmière libérale, mon but est de donner à chacun les
              soins qu’il mérite, des plus jeunes aux plus âgés, afin de
              continuer à croquer la vie à pleines dents !
            </p>
            <div className="d-flex d-lg-block flex-column align-items-center">
              <Link className="btn btn-red me-lg-5" to="/a-propos#faq">
                Questions fréquentes
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row about-images">
              <div className="col-6 col-lg-5 offset-lg-2 position-relative">
                <StaticImage
                  className="rounded-5"
                  src="../assets/images/caroline.jpg"
                  alt="Photo de profil de Caroline Jomard Serbin"
                  placeholder="blurred"
                  style={{ height: 400 }}
                />
                <div className="name-badge d-none d-lg-flex align-items-center position-absolute bg-white rounded-4 ps-2 py-2 pe-3 mt-4 mt-lg-0">
                  <div className="me-3">
                    <StaticImage
                      src="../assets/images/oni.jpg"
                      alt="Logo de l'Ordre National des Infirmiers"
                      placeholder="blurred"
                      style={{ width: 70 }}
                    />
                  </div>
                  <div>
                    <strong
                      className="text-nowrap"
                      style={{ fontSize: '.875rem' }}
                    >
                      Caroline Jomard Serbin
                    </strong>
                    <div className="text-secondary text-badge">Infirmière</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-5 mt-4 mt-lg-5 position-relative">
                <Pattern
                  width="144"
                  style={{
                    position: 'absolute',
                    bottom: '-.5rem',
                    right: '-.5rem'
                  }}
                  aria-hidden="true"
                />
                <StaticImage
                  className="rounded-5"
                  src="../assets/images/woman-patient-dentist.jpg"
                  alt="Photo d'une infirmière faisant un coeur avec ses mains"
                  placeholder="blurred"
                  style={{ height: 400 }}
                />
              </div>
            </div>

            <div className="row d-lg-none">
              <div className="col d-flex justify-content-center">
                <div className="d-flex align-items-center bg-white rounded-4 ps-2 py-2 pe-3 mt-4 mt-lg-0">
                  <div className="me-3">
                    <StaticImage
                      src="../assets/images/oni.jpg"
                      alt="Logo de l'Ordre National des Infirmiers"
                      placeholder="blurred"
                      style={{ width: 70 }}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <strong
                      className="text-nowrap"
                      style={{ fontSize: '.875rem' }}
                    >
                      Caroline Jomard Serbin
                    </strong>
                    <div className="text-secondary text-badge">Infirmière</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light py-4 py-lg-5">
      <div className="container">
        <div className="row mb-3">
          <strong className="text-red text-uppercase text-badge">
            Expériences
          </strong>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-lg-6">
            <h2 className="display-2 fw-bold">Parcours professionnel</h2>
          </div>
          <div className="col-12 col-lg-6 text-secondary">
            “Chaque jour est une nouvelle expérience et chaque expérience doit
            faire espérer un nouveau jour.”
          </div>
        </div>

        <div className="row g-lg-5">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <a
              className="nav-link"
              href="https://www.fo-rothschild.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                className="rounded-5 border w-100 mb-3"
                src="../assets/images/healthcare.jpg"
                alt="Logo de la fondation A. de Rothschild"
                placeholder="blurred"
                layout="fullWidth"
                aspectRatio={5 / 4}
                backgroundColor="white"
                transformOptions={{ fit: 'contain' }}
              />
              <div className="h5 text-dark text-center fw-bold">
                Fondation A. de Rothschild, Paris Ophtalmologie
              </div>
            </a>
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <a
              className="nav-link"
              href="https://www.aphp.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                className="rounded-5 border w-100 mb-3"
                src="../assets/images/aphp.jpg"
                alt="Logo de l'Assistance Publique, Hôpitaux de Paris"
                placeholder="blurred"
                layout="fullWidth"
                aspectRatio={5 / 4}
                backgroundColor="white"
                transformOptions={{ fit: 'contain' }}
              />
              <div className="h5 text-dark text-center fw-bold">
                Assistance publique, Hôpitaux de Paris
                <br />
                Tenon, Robert Debré
              </div>
            </a>
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <a
              className="nav-link"
              href="https://curie.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                className="rounded-5 border w-100 mb-3"
                src="../assets/images/curie.jpg"
                alt="Logo de l'Institut Curie Paris"
                placeholder="blurred"
                layout="fullWidth"
                aspectRatio={5 / 4}
                backgroundColor="white"
                transformOptions={{ fit: 'contain' }}
              />
              <div className="h5 text-dark text-center fw-bold">
                Institut Curie Paris
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-4 py-lg-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-lg-6 offset-lg-3 text-center">
            <h2 className="display-2 fw-bold mb-3">Les chiffres</h2>

            <div className="col text-secondary">
              Aucun chiffre ne peut décrire les relations avec ma patientelle,
              cependant c’est parfois ce que l’on retient le mieux.
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 col-lg-3 mb-4">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-red-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <strong className="fs-1 text-black">15</strong>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title">
                  <strong>Années de service</strong>
                </div>
                <div className="card-text text-secondary">
                  Hôpitaux, cliniques, instituts et missions humanitaires.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-red-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <strong className="fs-1 text-black">3</strong>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title">
                  <strong>Diplômes</strong>
                </div>
                <div className="card-text text-secondary">
                  Agréés d’état dans le domaine médical et d’aide à la personne.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-red-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <strong className="fs-1 text-black">6</strong>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title">
                  <strong>Membres d’équipe</strong>
                </div>
                <div className="card-text text-secondary">
                  Pour vous remettre au top de votre forme chaque jour !
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-red-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <strong className="fs-1 text-black">∞</strong>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title">
                  <strong>Une infinité</strong>
                </div>
                <div className="card-text text-secondary">
                  D’amour et de passion partagés chaque jour dans mon travail.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-3 mb-4">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-red-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <strong className="fs-1 text-black">56</strong>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title">
                  <strong>Morbihan</strong>
                </div>
                <div className="card-text text-secondary">
                  Je me déplace dans toute la région pour encore plus de
                  confort.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-red-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <strong className="fs-1 text-black">4</strong>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title">
                  <strong>Lieux d’interventions</strong>
                </div>
                <div className="card-text text-secondary">
                  À votre domicile, à l’école, sur votre lieu de travail ou à
                  mon cabinet.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-red-100 py-4 py-lg-5">
                <div className="card-img-icon w-auto d-flex align-items-center justify-content-center bg-white rounded-4">
                  <strong className="fs-1 text-black">208</strong>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title">
                  <strong>Véhicule de fonction</strong>
                </div>
                <div className="card-text text-secondary">
                  Mon bolide qui assure mes déplacements jusque chez vous !
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-red-100 py-4 py-lg-5">
                <div className="card-img-icon w-auto d-flex align-items-center justify-content-center bg-white rounded-4">
                  <strong className="fs-1 text-black">500+</strong>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title">
                  <strong>Tours de magie</strong>
                </div>
                <div className="card-text text-secondary">
                  Plus de 500 patients ont déjà bénéficiés de mes soins.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-5">
      <div className="container hero py-4 py-lg-5">
        <div className="row mt-4 mb-3">
          <div className="col">
            <strong className="text-red text-uppercase text-badge">
              Témoignages
            </strong>
          </div>
        </div>
        <div className="row mb-3 mb-lg-5">
          <div className="col-12 col-lg-5">
            <h2 className="display-2 fw-bold mb-3">
              L’avis de mes patients compte plus que tout !
            </h2>
          </div>

          <div className="h5 col-12 col-lg-5 offset-lg-2 text-secondary">
            C’est en partie grâce à vous que je trouve la force de me lever
            chaque matin pour vous accompagner dans vos combats quotidiens !
          </div>
        </div>

        <div className="row pt-5 mb-0 mb-lg-5">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <div className="card h-100 border-0 review rounded-5 pb-4">
              <div className="card-img-top card-review-img text-center">
                <StaticImage
                  className="rounded-circle"
                  src="../assets/images/SoniaDo.png"
                  alt=""
                  placeholder="blurred"
                  aria-hidden="true"
                />
              </div>
              <div className="card-body text-center">
                <div className="card-title mb-2">
                  <strong>Sonia Do</strong>
                </div>
                <p className="card-text mb-1">
                  Très sérieuse!
                  <br />
                  Caroline est très compétente et agréable.
                  <br />
                  Merci pour tout.
                </p>
              </div>
              <div className="align-self-center review-stars mb-3">
                <Stars aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <div className="card h-100 border-0 review rounded-5 pb-4">
              <div className="card-img-top card-review-img text-center">
                <StaticImage
                  className="rounded-circle"
                  src="../assets/images/Melysande.png"
                  alt=""
                  placeholder="blurred"
                  aria-hidden="true"
                />
              </div>
              <div className="card-body text-center">
                <div className="card-title mb-2">
                  <strong>Melysande</strong>
                </div>
                <p className="card-text mb-1">
                  Caroline est une infirmière douce, patiente et souriante. Elle
                  s’est occupée de mon fils de sa naissance jusqu’à ses 6 mois.
                  Merci !
                </p>
              </div>
              <div className="align-self-center review-stars mb-3">
                <Stars aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <div className="card h-100 border-0 review rounded-5 pb-4">
              <div className="card-img-top card-review-img text-center">
                <StaticImage
                  className="rounded-circle"
                  src="../assets/images/MadSauvegarde.png"
                  alt=""
                  placeholder="blurred"
                  aria-hidden="true"
                />
              </div>
              <div className="card-body text-center">
                <div className="card-title mb-2">
                  <strong>Mad Sauvegarde</strong>
                </div>
                <p className="card-text mb-1">
                  Caroline est arrivée en moins d’une heure après mon appel.
                  Très efficace et professionelle, je recommande plus que tout !
                </p>
              </div>
              <div className="align-self-center review-stars mb-3">
                <Stars aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-5 mb-lg-5" id="faq">
      <div className="container">
        <div className="row mb-3">
          <div className="col text-center">
            <strong className="text-red text-uppercase text-badge">FAQ</strong>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col text-center">
            <h2 className="display-2 fw-bold">Questions fréquentes</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header id="acc1">
                  Quelles sont les procédures à suivre pour bénéficier de vos
                  soins ?
                </Accordion.Header>
                <Accordion.Body aria-labelledby="acc1">
                  Il suffit simplement de m’envoyer une demande par mail,
                  téléphone ou via medicalib et de remplir le formulaire pour
                  une prise en charge totale. Le reste, c’est moi qui gère!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header id="acc2">
                  Dans quel secteur géographique intervenez-vous ?
                </Accordion.Header>
                <Accordion.Body aria-labelledby="acc2">
                  Séné et ses environs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header id="acc3">
                  Mon fils de 2 mois a besoin d’une prise de sang, est-ce
                  possible ?
                </Accordion.Header>
                <Accordion.Body aria-labelledby="acc3">
                  Oui bien sûr, je peux faire tout type de soins à une
                  patientèle âgée de quelques jours à 120 ans.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header id="acc4">
                  Dois-je payer des frais pour une ordonnance de soins
                  quotidiens ?
                </Accordion.Header>
                <Accordion.Body aria-labelledby="acc4">
                  Si vos documents sont à jour, assurance maladie, mutuelle,
                  CSS, CMU, AME. Pas de soucis, vous n'aurez pas de frais à
                  avancer.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header id="acc5">
                  Je travaille beaucoup, pouvez-vous passer avant 8h ou après
                  19h ?
                </Accordion.Header>
                <Accordion.Body aria-labelledby="acc5">
                  Oui bien sûr, nous convenons ensemble de la tranche horaire de
                  passage qui vous convient le mieux, avant ou après votre
                  travail.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default APropos

export const Head = () => (
  <title>A propos - Caroline Jomard Serbin, Infirmière libérale à Séné</title>
)
