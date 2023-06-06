import ApartmentPageBanner from "../components/ApartmentPageBanner";
import ApartmentPageDescription from "../components/ApartmentPageDescription";
import ApartmentPageHeader from "../components/ApartmentPageHeader"
import "./ApartmentPage.scss";

function ApartmentPage(){
    return(
        <div className="apartmentPage">
            <ApartmentPageBanner />
            <ApartmentPageHeader />
            <ApartmentPageDescription />            
        </div>
    );
}

export default ApartmentPage;