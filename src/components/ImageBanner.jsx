import "./ImageBanner.scss"
import { useState } from "react";

function ImageBanner(props){    
    const pictures = props.pictures;

    const [visiblePicture, setVisiblePicture] = useState(0);

    const getClassName = (index) => {
        if (index === visiblePicture) return "show";
        return "";
    }

    const nextPicture = () => {
        setVisiblePicture ((visiblePicture + 1) % pictures.length);
    }
    const previousPicture = () => {
        const newPicture = visiblePicture - 1;
        if (newPicture < 0 ) {
            setVisiblePicture(pictures.length -1);
            return;
        }
        setVisiblePicture (visiblePicture - 1);
    }

    const picturesAvailable = () => {
        return pictures && pictures.length > 0;        
    };

    const carouselOrImage = () => {
        if (!picturesAvailable()) {
            return <img src="./../../src/assets/image/Banner_About.png" className="show" alt="Image de bannière" />;
        }
        return pictures.map((pic, index) => (
            <img key={pic} src={pic} alt="Image de bannière" className={getClassName(index)} />
        ));
    }    

    return(
        <div className="image__banner">
            {picturesAvailable() && (
                <>
                <span className="slide-number">{visiblePicture + 1}/{pictures.length}</span>               
                <button className="btn btn-next" onClick={nextPicture}><i className="fas fa-chevron-right"></i></button>
                <button className="btn btn-previous" onClick={previousPicture}><i className="fas fa-chevron-left"></i></button>
                </>
            )}
            <div className="image__container"> {carouselOrImage()} </div>            
        </div>
    );
}

export default ImageBanner;