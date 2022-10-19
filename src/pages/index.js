import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

import Home from '../assets/svg/inline/home.svg'
import Pansement from '../assets/svg/inline/pansement.svg'
import Seringue from '../assets/svg/inline/seringue.svg'
import Perfusion from '../assets/svg/inline/perfusion.svg'
import Pills from '../assets/svg/inline/pills.svg'
import Time from '../assets/svg/inline/time.svg'
import Virus from '../assets/svg/inline/virus.svg'
import Larynx from '../assets/svg/inline/larynx.svg'
import Douche from '../assets/svg/inline/douche.svg'
import Check from '../assets/svg/inline/check.svg'
import Hands from '../assets/svg/inline/hands.svg'
import Caducet from '../assets/svg/inline/caducet.svg'
import HeartHands from '../assets/svg/inline/heart_hands.svg'

const IndexPage = () => (
  <Layout pageColor="green">
    <section className="mb-3">
      <div className="container hero hero-header hero-home">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h1 className="display-1 fw-bold mb-4">Infirmière Libérale</h1>
            <p className="mb-5">
              Bonjour, je suis Caroline !<br />
              <br />
              Après de longues années d’expérience à l’hôpital, me voici
              désormais infirmière libérale sur le secteur de Séné, Vannes, et
              environs.
              <br />
              <br />
              Depuis 4 ans maintenant, je me déplace au domicile des patients
              pour prodiguer leurs soins.
            </p>
            <div className="d-flex d-lg-block flex-column align-items-center">
              <Link
                className="btn btn-green mb-3 mx-auto me-lg-5"
                to="/a-propos"
              >
                En savoir plus
              </Link>
              <Link
                className="btn btn-green mb-3 mx-auto me-lg-5"
                to="/contact#formulaire"
              >
                Prendre RDV
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="home-image">
              <Home aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-4 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="quote text-center fs-2 px-3 px-lg-5 pb-5">
              “En tant qu'infirmière, nous avons la possibilité de guérir le
              cœur, l'esprit, l'âme et le corps de nos patients, de leurs
              familles et de nous-mêmes. Ils peuvent oublier votre nom, mais ils
              n'oublieront jamais ce que vous leur avez fait ressentir.”
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light py-5">
      <div className="container">
        <div className="row mb-3">
          <strong className="text-green text-uppercase text-badge">
            Soins à domicile
          </strong>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-lg-6 mb-3 mb-lg-0">
            <h2 className="display-2 fw-bold">
              N'ayez plus peur
              <br />
              de guérir
            </h2>
          </div>
          <div className="col-12 col-lg-6 text-secondary">
            Conventionnée Assurance Maladie, AME, CSS, CMU, toutes mutuelles.
            100% prise en charge par la sécurité sociale et votre complémentaire
            santé sans avance de frais.
          </div>
        </div>

        <div className="row mb-0 mb-lg-4">
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-green-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <Pansement aria-hidden="true" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title fw-bold">Pansements</div>
                <div className="card-text text-secondary">
                  Suivi des plaies chroniques ou post-opératoires. Pansements
                  courants, lourds ou complexes.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-green-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <Seringue aria-hidden="true" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title fw-bold">
                  Injections / Prélèvements
                </div>
                <div className="card-text text-secondary">
                  Intra-musculaire, sous-cutanné, intra-veineuse, ou tout autre
                  type de prélèvement.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-green-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <Perfusion aria-hidden="true" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title fw-bold">Perfusions</div>
                <div className="card-text text-secondary">
                  Intra-veineux ou sous-cutané, de courte ou longue durée
                  (antibiotique, hydratation, chimio..)
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-green-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <Pills aria-hidden="true" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title fw-bold">Traitements</div>
                <div className="card-text text-secondary">
                  Administration de traitements, préparation des semainiers,
                  etc.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-green-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <Time aria-hidden="true" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title fw-bold">
                  Pathologies chroniques
                </div>
                <div className="card-text text-secondary">
                  Suivi de diabète, BPCO, maladie de Parkinson, insuffisance
                  cardiaque, etc...
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-green-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <Virus aria-hidden="true" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title fw-bold">COVID-19</div>
                <div className="card-text text-secondary">
                  Test antigéniques, PCR, vaccination et rappels.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-green-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <Larynx aria-hidden="true" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title fw-bold">Soins de stomie</div>
                <div className="card-text text-secondary">
                  Pansements avec matériel adapté, évaluation et quantification
                  des sorties.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="card card-shadow h-100 pt-3 px-3 rounded-5">
              <div className="card-img-top rounded-5 d-flex align-items-center justify-content-center bg-green-100 py-4 py-lg-5">
                <div className="card-img-icon d-flex align-items-center justify-content-center bg-white rounded-4">
                  <Douche aria-hidden="true" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="h5 card-title fw-bold">Hygiène et confort</div>
                <div className="card-text text-secondary">
                  Aide à la toilette et change vestimentaire.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-4 py-lg-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-3 mb-lg-0">
            <div className="cropped-bg-img bg-green-100 ps-5 py-5 rounded-4 w-50">
              <StaticImage
                className="rounded-4"
                src="../assets/images/patient-receiving-dental-treatment.png"
                alt="Photo d'une petite fille souriante accompagnée d'une infirmière pédiatrique."
                placeholder="blurred"
              />
            </div>
          </div>
          <div className="col">
            <div className="row mb-3">
              <strong className="text-green text-uppercase text-badge">
                Diplomée d’état
              </strong>
            </div>
            <div className="row mb-3">
              <div className="col">
                <h2 className="display-2 fw-bold">Spécialité pédiatrique</h2>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col text-secondary">
                Utilisation de techniques spécifiques de prise en charge de la
                douleur chez l’enfant, (solution sucrée, distraction,
                allaitement maternel…)
                <br />
                <br />
                Prélèvement sanguin et urinaire, pansement, injections,
                perfusions, nutrition entérale sur sonde naso gastrique, soins
                de stomie, chimiothérapie…
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link className="btn btn-green" to="/contact#formulaire">
                  Prendre RDV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-3">
      <div className="container hero py-4 py-lg-5">
        <div className="row mt-4 mb-5">
          <div className="col-12 col-xxl-10 offset-xxl-1">
            <div className="row mb-3">
              <strong className="text-green text-uppercase text-badge">
                Services
              </strong>
            </div>
            <div className="row mb-3">
              <div className="col">
                <h2 className="display-2 fw-bold">
                  L’assurance d’être entre de bonnes mains
                </h2>
              </div>
            </div>{' '}
            <div className="row">
              <div className="col-12 col-lg-8 text-secondary">
                J’appréhende intuitivement le « prendre soin » comme le cœur de
                mon métier et je me le représente idéalement comme généreux et
                bienveillant.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-xxl-10 offset-xxl-1">
            <div className="row mb-4">
              <div className="col mb-4 mb-lg-0">
                <div className="d-flex">
                  <div className="card-img-icon d-flex flex-grow-0 flex-shrink-0 align-items-center justify-content-center bg-white rounded-4 ms-3 me-4 mt-2">
                    <Check aria-hidden="true" />
                  </div>
                  <div className="ms-2">
                    <div className="h5">
                      <strong>Responsabilité et sécurité</strong>
                    </div>
                    <div className="card-text text-secondary">
                      En acceptant mes services, vous serez toujours traité de
                      la meilleure des manières.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex">
                  <div className="card-img-icon d-flex flex-grow-0 flex-shrink-0 align-items-center justify-content-center bg-white rounded-4 ms-3 me-4 mt-2">
                    <Hands aria-hidden="true" />
                  </div>
                  <div className="ms-2">
                    <div className="h5">
                      <strong>Facilité de remboursement</strong>
                    </div>
                    <div className="card-text text-secondary">
                      Conventionnée Assurance Maladie, AME, CSS, CMU, toutes
                      mutuelles.
                      <br />
                      Prise en charge par la sécurité sociale et complémentaire
                      santé sans avance de frais.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col mb-4 mb-lg-0">
                <div className="d-flex">
                  <div className="card-img-icon d-flex flex-grow-0 flex-shrink-0 align-items-center justify-content-center bg-white rounded-4 ms-3 me-4 mt-2">
                    <Caducet aria-hidden="true" />
                  </div>
                  <div className="ms-2">
                    <div className="h5">
                      <strong>Secret professionnel</strong>
                    </div>
                    <div className="card-text text-secondary">
                      Fidèle au serment d’Hippocrate, vos soins sont exclusifs
                      et confidentiels.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex">
                  <div className="card-img-icon d-flex flex-grow-0 flex-shrink-0 align-items-center justify-content-center bg-white rounded-4 ms-3 me-4 mt-2">
                    <HeartHands aria-hidden="true" />
                  </div>
                  <div className="ms-2">
                    <div className="h5">
                      <strong>Respect</strong>
                    </div>
                    <div className="card-text text-secondary">
                      Du petit pansement aux maladies mortelles, mon rôle est
                      avant tout de soigner avec tact et sans jugements.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-4 py-lg-5">
      <div className="container">
        <div className="row mb-3">
          <strong className="text-green text-uppercase text-badge">
            Galerie
          </strong>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-lg-6">
            <h2 className="display-2 fw-bold">La preuve en images...</h2>
          </div>
          <div className="col-12 col-lg-6 text-secondary">
            Chaque jour et une aventure innoubliable pour mes patients comme
            pour moi. Nous n’oublierons jamais ces séjours thérapeutiques à
            Quiberon, ou les soins exercés sur un bateau près de la Teignouse...
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6 col-lg-5 mb-4">
            <StaticImage
              className="rounded-5 w-100"
              src="../assets/images/image_31.jpg"
              alt="Photo de Caroline Jomard Serbin avec un enfant"
              style={{ height: 300 }}
              placeholder="blurred"
            />
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <StaticImage
              className="rounded-5 w-100"
              src="../assets/images/image_36.jpg"
              alt="Photo d'un dessin sur un bras"
              style={{ height: 300 }}
              placeholder="blurred"
            />
          </div>
          <div className="col-6 col-lg-4 mb-4">
            <StaticImage
              className="rounded-5 w-100"
              src="../assets/images/image_34.jpg"
              alt="Photo de Caroline Jomard Serbin et d'une enfant. Elles portent des ours en peluches."
              style={{ height: 300 }}
              placeholder="blurred"
            />
          </div>

          <div className="col-6 col-lg-3 mb-4 mb-lg-0">
            <StaticImage
              className="rounded-5 w-100"
              src="../assets/images/image_35.jpg"
              alt="Photo de Caroline Jomard Serbin de dos lors de l'évènement &quot;l'hôpital en fête&quot;"
              style={{ height: 300 }}
              placeholder="blurred"
            />
          </div>
          <div className="col-6 col-lg-4">
            <StaticImage
              className="rounded-5 w-100"
              src="../assets/images/image_33.jpg"
              alt="Photo de Caroline Jomard Serbin et d'une enfant souriante sur un lit d'hôpital durant un match de l'équipe de France de footbal"
              style={{ height: 300 }}
              placeholder="blurred"
            />
          </div>
          <div className="col-6 col-lg-5">
            <StaticImage
              className="rounded-5 w-100"
              src="../assets/images/image_32.jpg"
              alt="Photo de Caroline Jmard Serbin accompagnant des enfants sur un bateau"
              style={{ height: 300 }}
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
  <>
    <title>Caroline Jomard Serbin, Infirmière libérale à Séné</title>
    <meta
      name="description"
      content="Caroline Jomard Serbin est une infirmière libérale disponible à Séné et ses environs."
    />
  </>
)
