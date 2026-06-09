import { useState } from "react";

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

import NavMenu from "./navMenu";

function Feedback () {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = useSelector((state) => state.textColor);
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme} id="Feedback" style={{ color: textColor }}>
      <button id="burgerButton" onClick={() => { setIsOpen((prev) => !prev) }}><FontAwesomeIcon icon={faBarsStaggered} /></button>
      <NavMenu isOpen={isOpen} />
      <h1>Feedback</h1>
      <p>Ici pour donner votre avis sur le site !</p>
    </div>
  );
};

export default Feedback;