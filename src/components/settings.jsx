import { useRef } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { changeColor, changeSize, changeTheme } from "../store";

function Settings () {
    const dispatch = useDispatch();

    const sizeRef = useRef(null);
    const colorRef = useRef(null);
    const themeRef = useRef(null);

    return (
        <div id="settingsPage">
            <Link to="/" className="escapeButton"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
            <form className="settingsBox" onSubmit={(e) => {e.preventDefault();}}>
                <h1>Settings</h1>
                <fieldset>
                    <legend>Taille du texte</legend>
                    <input type="range" min="6" max="24" step="1" defaultValue="16" ref={sizeRef} />
                </fieldset>
                <fieldset>
                    <legend>Couleur du texte</legend>
                    <div className="colorator-wrap"><input type="color" defaultValue="#ffffff" ref={colorRef} /></div>
                </fieldset>
                <fieldset>
                    <legend>Thème du site</legend>
                    <select defaultValue="standardTheme" ref={themeRef}>
                        <option value="standardTheme">Standard</option>
                        <option value="greenTheme">Vert</option>
                        <option value="redTheme">Rouge</option>
                        <option value="yellowTheme">Jaune</option>
                    </select>
                </fieldset>
                <input type="submit" value="Enregistrer" onClick={() => {
                    dispatch(changeSize(sizeRef.current.value));
                    dispatch(changeColor(colorRef.current.value));
                    dispatch(changeTheme(themeRef.current.value));
                    localStorage.setItem("theme-sanguinator", themeRef.current.value);
                }} />
                <input type="reset" value="Rétablir les modifications" />
            </form>
        </div>
    );
};

export default Settings;