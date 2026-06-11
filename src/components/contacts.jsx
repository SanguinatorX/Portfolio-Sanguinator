import { useState } from "react";

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

import NavMenu from "./navMenu.jsx";

function Contacts () {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = useSelector((state) => state.textColor);
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme} id="Feedback" id="contacts" style={{ color: textColor }}>
      <button id="burgerButton" onClick={() => { setIsOpen((prev) => !prev) }}><FontAwesomeIcon icon={faBarsStaggered} /></button>
      <NavMenu isOpen={isOpen} />
      <h1>Contacts</h1>
      <p>Ici contacts du créateur du site !</p>
    </div>
  );
};

export default Contacts;