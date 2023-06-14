import { useEffect, useState } from "react";
import "./Annonce.scss";
import ApartmentCard from "./ApartmentCard"

function Annonce() {
    const [apartments, setApartments] = useState([]);
    useEffect (fetchApartments, []);
    
    function fetchApartments(){
        fetch("../../../database.json")
            .then((res) => (res.json()))
            .then((res) => setApartments(res))
            .catch(console.error);           
    }
    return <section className="container">
                {apartments.map((apartment) => (
                <ApartmentCard key={apartment.id} id={apartment.id} title={apartment.title} imageUrl={apartment.cover}/>
                ))}                
            </section>
}

export default Annonce;