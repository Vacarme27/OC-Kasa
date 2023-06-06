import "./Apartment.scss";
import { Link } from "react-router-dom";

function Appartment(){
    return <div className="apartment">
                <Link to="/apartment">                
                <p className="apartment__subtitle">Titre de la location</p> 
                </Link>
            </div>
}

export default Appartment;