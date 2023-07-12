import "./DescriptionPanel.scss"
import { useState } from "react";

function DescriptionPanel(props){

    const [isVisible, setIsVisible] = useState(false);

    const visible = () => {
        setIsVisible (!isVisible);
    }
    const chevronClass = "fas " + (isVisible ? "fa-chevron-up" : "fa-chevron-down");
    const contentClass = (isVisible ? "visible" : "hidden") + " description__content";

    return(        
        <article className="description__panel">
            <p className="description__header" onClick={visible}>
                <span>{props.title}</span>
                <i className={chevronClass}></i>
            </p>            
            <p className= {contentClass} >{props.content}
            </p>
        </article> 
    );
}
export default DescriptionPanel;