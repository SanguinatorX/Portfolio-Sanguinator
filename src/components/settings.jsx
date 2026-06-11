import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from 'react-redux';

function Settings () {
    const theme = useSelector((state) => {state.theme});

    return (
        <div className={theme} id="settingsPage">
            <Link to="/" className="escapeButton"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
            <div className="settingsBox">
                <h1>Settings</h1>
                <p>This is the settings page !</p>
            </div>
        </div>
    );
};

export default Settings;