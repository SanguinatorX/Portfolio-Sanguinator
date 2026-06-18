import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Settings () {
    return (
        <div id="settingsPage">
            <Link to="/" className="escapeButton"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
            <form className="settingsBox">
                <h1>Settings</h1>
                <fieldset>
                    <legend>Taille du texte</legend>
                    <input type="range" min="6" max="24" step="1" defaultValue="16" />
                </fieldset>
                <fieldset>
                    <legend>Couleur du texte</legend>
                    <div className="colorator-wrap"><input type="color" defaultValue="#ffffff" /></div>
                </fieldset>
                <fieldset>
                    <legend>Thème du site</legend>
                    <select defaultValue="standard">
                        <option value="standardTheme">Standard</option>
                        <option value="greenTheme">Vert</option>
                        <option value="redTheme">Rouge</option>
                        <option value="yellowTheme">Jaune</option>
                    </select>
                </fieldset>
            </form>
        </div>
    );
};

export default Settings;