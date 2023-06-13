import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer(){
    return <div className="footer">
        <div className="footer__logo">
            <Link to="/">        
                <img src="./../../src/assets/logo/logo_black.png" alt="Logo Kasa" />
            </Link>
        </div>
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer;