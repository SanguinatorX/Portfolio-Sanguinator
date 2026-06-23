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
                    <label htmlFor="textSizeSelector">Choisissez une taille pour le texte :</label>
                    <input type="range" id="textSizeSelector" min="6" max="24" step="1" defaultValue="16" ref={sizeRef} />
                </fieldset>
                <fieldset>
                    <legend>Couleur du texte</legend>
                    <label htmlFor="textColorSelector">Choisissez une couleur pour le texte :</label>
                    <div className="colorator-wrap"><input type="color" id="textColorSelector" defaultValue="#ffffff" ref={colorRef} /></div>
                </fieldset>
                <fieldset>
                    <legend>Thème du site</legend>
                    <label htmlFor="themeSelector">Choisissez un thème pour le site parmi les options disponibles :</label>
                    <select id="themeSelector" defaultValue="standardTheme" ref={themeRef}>
                        <option value="standardTheme">Standard 😑</option>
                        <option value="greenTheme">Végétal 🌳</option>
                        <option value="redTheme">Ensanglanté 🩸</option>
                        <option value="yellowTheme">Jaunisse 🫠</option>
                    </select>
                </fieldset>
                <hr />
                <fieldset>
                    <button type="submit" onClick={() => {
                        dispatch(changeSize(sizeRef.current.value));
                        dispatch(changeColor(colorRef.current.value));
                        dispatch(changeTheme(themeRef.current.value));
                        localStorage.setItem("theme-sanguinator", themeRef.current.value);
                    }}>Enregistrer</button>
                    <button type="reset">Rétablir les modifications</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Settings;