import "./Appartment.css";
import { Link } from "react-router-dom";

function Appartment(){
    return <div className="appartment">
                <Link to="/appartment">                
                <p className="appartment__title">Titre de la location</p> 
                </Link>
            </div>
}

export default Appartment;