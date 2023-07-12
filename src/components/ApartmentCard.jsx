import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

function AppartmentCard(props){    
    return (
        <Link
            to={`/apartment/${props.id}`}
            state={{
            apartmentId: props.id
            }}
        >
            <div className="apartment">                
                <img src={props.imageUrl} alt={props.title} />               
                <p className="apartment__subtitle">{props.title}</p> 
            </div>
        </Link>
    );
}

export default AppartmentCard;