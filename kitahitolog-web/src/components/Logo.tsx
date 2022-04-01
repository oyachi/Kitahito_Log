import React from "react"
import LightThemeLogo from "../images/kitahitolog-logo-light.png"
import DarkThemeLogo from "../images/kitahitolog-logo-dark.png"
/* styles */
import styles from "../styles/Logo.module.css"

interface Props {
    mode: string
}

const Logo: React.VFC<Props> =(props) => {
    return(
        <div className={styles.logo}>
            <img src={props.mode === "dark" ? DarkThemeLogo : LightThemeLogo} className={styles.logo} />
        </div>
    );
}

export default Logo;