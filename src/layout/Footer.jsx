import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer(){
    return <footer className="footer">        
        <Link to="/">        
            <img src="./../../src/assets/logo/logo_black.png" alt="Logo Kasa" />
        </Link>        
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
}

export default Footer;