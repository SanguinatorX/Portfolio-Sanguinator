import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faIdCardClip, faCommentDots, faGear } from "@fortawesome/free-solid-svg-icons";

function NavMenu (props) {
  return (
    <nav className={props.isOpen ? "affiche" : "cache"}>
      <ul>
        <li><Link to="/"><button><FontAwesomeIcon icon={faHouse} />&nbsp;Accueil</button></Link></li>
        <li><Link to="/contacts"><button><FontAwesomeIcon icon={faIdCardClip} />&nbsp;Contacter</button></Link></li>
        <li><Link to="/propos"><button><FontAwesomeIcon icon={faCommentDots} />&nbsp;À propos</button></Link></li>
        <li><Link to=""><button><FontAwesomeIcon icon={faGear} />&nbsp;Paramètres</button></Link></li>
      </ul>
    </nav>
  );
}

export default NavMenu;