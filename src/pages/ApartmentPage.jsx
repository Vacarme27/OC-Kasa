import ImageBanner from "../components/ImageBanner";
import DescriptionPanel from "../components/DescriptionPanel";
import ApartmentPageHeader from "../components/ApartmentPageHeader"
import "./ApartmentPage.scss";
import { useParams } from "react-router-dom";
import database from "../../database.json"
import ErrorPage from '../pages/ErrorPage.jsx'

function ApartmentPage(){
    const { id } = useParams();
    const selectedApartment = database.find((data) => data.id === id);

  if (!selectedApartment) {
    return <ErrorPage />;
  }  
    return(
        <div className="apartment_page">
            <ImageBanner pictures={selectedApartment.pictures} />
            <ApartmentPageHeader selectedApartment={selectedApartment}/>
            <div className="apartment__description__area">
                <DescriptionPanel title="Description" content={selectedApartment.description} />
                <DescriptionPanel
                title="Equipement"
                content={selectedApartment.equipments.map((equipment, id) => (
                    <li key={id}>{equipment}</li>
                ))}
                />         
            </div>
        </div>
    );
}
export default ApartmentPage;