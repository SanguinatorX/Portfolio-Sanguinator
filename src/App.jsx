import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

import NavMenu from "./components/navMenu.jsx";

function Header () {
  const [arrowCount, setArrowCount] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
    setArrowCount(prev => (prev < 4 ? prev + 1 : 1));
    if (window.innerWidth < 800) {
      setArrowCount(1);
    }
    if (window.innerWidth < 990) {
      setArrowCount(prev => (prev < 3 ? prev + 1 : 1));
    }
  }, 340);

  return () => clearInterval(interval);
}, []);

  return (
    <header>
      <div>
        <span>
          {[...Array(arrowCount)].map((_, i) => (
            <FontAwesomeIcon key={`${arrowCount}-${i}`} icon={faAnglesRight} />
          ))}
        </span>
        <div className="favicon-container">
          <img src="/public/favicon.ico" alt="Favicon" id="favicon" />
        </div>
        <span>
          {[...Array(arrowCount)].map((_, i) => (
            <FontAwesomeIcon key={`${arrowCount}-${i}`} icon={faAnglesLeft} />
          ))}
        </span>
      </div>
      <h1>Bienvenue sur le portfolio de <cite>SanguinatorX</cite> !</h1>
    </header>
  );
}

function Intro() {
  return (
    <section className="intro">
      <p>
        Je suis un développeur passionné par la création de projets innovants et fonctionnels.
        J’aime transformer des idées en interfaces concrètes, propres et efficaces, en utilisant des technologies modernes du web.
      </p>
      <p>
        Sur ce portfolio, vous trouverez une sélection de mes travaux les plus récents, allant de petits projets d’apprentissage
        à des applications plus complètes. Chaque projet m’a permis de progresser sur différents aspects comme le front-end,
        la logique de développement et la gestion de l’architecture.
      </p>
      <p>
        Je m’intéresse particulièrement à l’amélioration de l’expérience utilisateur, à la performance des applications
        et à la qualité du code. J’essaie constamment d’apprendre de nouvelles technologies et de perfectionner mes compétences.
      </p>
      <p>
        N'hésitez pas à parcourir les différentes sections pour en savoir plus sur mon parcours et mes réalisations.
        Si vous avez un projet intéressant ou une idée à développer, je suis toujours ouvert aux collaborations.
      </p>
    </section>
  );
}

function Travaux () {
  const scrollingUl = useRef(null);

  return (
    <section className="travaux">
      <h2 onClick={() =>
            scrollingUl.current?.scrollIntoView({
            behavior: "smooth",
          })}>⮟&nbsp;Mes réalisations&nbsp;⮟</h2>
      <ul ref={scrollingUl}>
        <li><h3>Le développement web</h3>
          <p>
            Découvrez mes projets et mon expérience dans le développement.
          </p>
          <Link to="/webdev"><button>Voir</button></Link>
        </li>
        <li><h3>La cybersécurité</h3>
          <p>
            Voyez mes compétences que je possède en matière de cybersécurité.
          </p>
          <Link to="/cybersecurite"><button>Voir</button></Link>
        </li>
        <li><h3>Le gaming</h3>
          <p>
            Découvrez mes progrès et ma progression dans toutes sortes de jeux vidéos.
          </p>
          <Link to="/gaming"><button>Voir</button></Link>
        </li>
        <li><h3>L'intelligence artificielle</h3>
          <p>
            Visualisez ce que j'ai pu faire en utilisant l'intelligence artificielle.
          </p>
          <Link to="/IA"><button>Voir</button></Link>
        </li>
        <li><h3>La modélisation 3D</h3>
          <p>
            Constatez mes oeuvres tridimentionelles virtuelles que j'ai pu réaliser.
          </p>
          <Link to="/modelisation"><button>Voir</button></Link>
        </li>
        <li><h3>La littérature</h3>
          <p>
            Lisez mes ouvrages littéraires que j'ai écri de ma main et de mon esprit.
          </p>
          <Link to="/litterature"><button>Voir</button></Link>
        </li>
      </ul>
    </section>
  )
}

function App () {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = useSelector((state) => state.textColor);
  const theme = useSelector((state) => state.theme);
  const textSize = useSelector((state) => state.textSize);
  
  return (
    <div id="app" className={theme} style={{ color: textColor, fontSize: textSize }}>
      <button id="burgerButton" onClick={() => { setIsOpen((prev) => !prev) }}><FontAwesomeIcon icon={faBarsStaggered} /></button>
      <NavMenu isOpen={isOpen} />
      <Header />
      <hr />
      <main>
        <Intro />
        <Travaux />
      </main>
      <Outlet />
    </div>
  )
}

export default App;
