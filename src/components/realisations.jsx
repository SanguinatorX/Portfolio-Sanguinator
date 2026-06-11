import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Webdev () {
  return (
    <section className="realisations">
      <Link to="/" className="escapeButton"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
      <div className="webdev">
        <h2>Webdev</h2>
        <p>Ici je dev !</p>
      </div>
    </section>
  );
};

function Cybersecurite () {
    return (
    <section className="realisations">
      <Link to="/" className="escapeButton"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
      <div className="cybersecurite">
        <h2>Cybersécurité</h2>
        <p>Ici je sécu !</p>
      </div>
    </section>
  );
}

function Gaming () {
    return (
    <section className="realisations">
      <Link to="/" className="escapeButton"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
      <div className="gaming">
        <h2>Gaming</h2>
        <p>Ici je joue !</p>
      </div>
    </section>
  );
}

function IA () {
    return (
    <section className="realisations">
      <Link to="/" className="escapeButton"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
      <div className="IA">
        <h2>IA</h2>
        <p>Ici un peu d'ingénierie d'invite !</p>
      </div>
    </section>
  );
}

function Modelisation () {
    return (
    <section className="realisations">
      <Link to="/" className="escapeButton"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
      <div className="modelisation">
        <h2>Modélisation 3D</h2>
        <p>Ici je modélise des assets 3D !</p>
      </div>
    </section>
  );
}

function Litterature () {
    return (
    <section className="realisations">
      <Link to="/" className="escapeButton"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
      <div className="litterature">
        <h2>Littérature</h2>
        <p>Ici je lis !</p>
      </div>
    </section>
  );
}

export { Webdev, Cybersecurite, Gaming, IA, Modelisation, Litterature };