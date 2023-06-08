import "./ApartmentPageHeader.scss"

function ApartmentPageHeader(props){

const name = props.selectedApartment.host.name;
const [firstName, lastName] = name.split(" ");


    return (
        <div className="apartment__header">
                <div className="apartment__title">
                    <h1>{props.selectedApartment.title}</h1>
                    <h2>{props.selectedApartment.location}</h2>
                    <div className="apartment__tags">                        
                        {props.selectedApartment.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="apartment__owner">
                    <div className="apartment__owner_details">
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3>
                    <div className="apartment__owner__badge">
                    <img src={props.selectedApartment.host.picture} alt={`Portrait de : ${firstName} ${lastName}`} />

                    </div>
                    </div>
                    <div className="apartment__owner__stars">
                        { [1, 2, 3, 4, 5].map((number) => (
                        <span
                            key={number} 
                            className={props.selectedApartment.rating >= number ? "on" : ""}>★</span>                                               
                        ))}                        
                    </div>
                </div>
            </div>
    );
}

export default ApartmentPageHeader;