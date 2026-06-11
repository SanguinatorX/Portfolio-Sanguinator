import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Settings () {
    return (
        <div id="settingsPage">
            <Link to="/" className="escapeButton"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
            <form className="settingsBox">
                <h1>Settings</h1>
                <p>This is the settings page !</p>
            </form>
        </div>
    );
};

export default Settings;