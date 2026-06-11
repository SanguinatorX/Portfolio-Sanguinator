import React from "react";
import { useSelector } from "react-redux";

function NotFound () {
  const textColor = useSelector((state) => state.textColor);
  const theme = useSelector((state) => state.theme);
  const textSize = useSelector((state) => state.textSize);

  return (
    <aside className={theme} style={{ color: textColor, fontSize: textSize }}>
      <h1>Erreur de url...</h1>
      <p>Impossible de trouver cette page sur ce site</p>
    </aside>
  );
};

export default NotFound;