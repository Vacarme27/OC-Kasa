import DescriptionPanel from "../components/DescriptionPanel.jsx"
import ImageBanner from "../components/ImageBanner.jsx"
import "./About.scss"

function About(){
    return (
        <>
        <ImageBanner />
        <div className="about__container">
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        </div>
        </>
    );
}

export default About;