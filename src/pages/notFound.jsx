import React from "react";
import { useSelector } from "react-redux";

function NotFound () {
  const textColor = useSelector((state) => state.textColor);

  return (
    <aside style={{ color: textColor }}>
      <h1>Erreur de url...</h1>
      <p>Impossible de trouver cette page sur ce site</p>
    </aside>
  );
};

export default NotFound;