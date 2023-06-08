import ImageBanner from "../components/ImageBanner";
import DescriptionPanel from "../components/DescriptionPanel";
import ApartmentPageHeader from "../components/ApartmentPageHeader"
import "./ApartmentPage.scss";
import { useLocation} from "react-router-dom";
import {useEffect, useState} from 'react';


function ApartmentPage(){
    const location = useLocation();

    const [selectedApartment, setSeletedApartment] = useState(null);
    useEffect(fetchApartmentData, [location.state.apartmentId]);

    function fetchApartmentData(){
        fetch("../../../database.json")
            .then((res) => (res.json()))
            .then((apartments) => {
                const Apartment = apartments.find(apartment => apartment.id === location.state.apartmentId); 
                setSeletedApartment(Apartment);               
            })
            .catch(console.error);
    }
    if (selectedApartment == null) return <h1>Loading</h1>
    return(
        <div className="apartmentPage">
            <ImageBanner pictures={selectedApartment.pictures} />
            <ApartmentPageHeader selectedApartment={selectedApartment}/>
            <div className="apartment__description__area">
                <DescriptionPanel title="Description" content={selectedApartment.description} />
                <DescriptionPanel
                title="Equipement"
                content={selectedApartment.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
                />         
            </div>
        </div>
    );
}

export default ApartmentPage;