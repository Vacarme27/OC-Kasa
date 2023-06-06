import "./ApartmentPageDescription.scss"
function ApartmentPageDescription(){
    return(
        <div className="apartment__description_area">
                <div className="apartment__description">
                    <p className="description__header">
                        <span>Description</span>
                        <i className="fa-sharp fa-solid fa-chevron-down"></i>
                    </p>
                    <p className="description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eveniet et illo suscipit quo at accusantium voluptates ipsa culpa? Impedit velit hic aspernatur, veniam maiores sunt magni voluptatum maxime ducimus obcaecati quae delectus minus. Iure molestias aliquam consequatur sed vero nam similique non corrupti optio minima eveniet deleniti, fugit nobis?
                    </p>
                </div>
                <div className="apartment__description">
                    <p className="description__header">
                        <span>Équipement</span>
                        <i className="fa-sharp fa-solid fa-chevron-down"></i>
                    </p>
                    <p className="description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eveniet et illo suscipit quo at accusantium voluptates ipsa culpa? Impedit velit hic aspernatur, veniam maiores sunt magni voluptatum maxime ducimus obcaecati quae delectus minus. Iure molestias aliquam consequatur sed vero nam similique non corrupti optio minima eveniet deleniti, fugit nobis?
                    </p>
                </div>
            </div>        
    );
        
}

export default ApartmentPageDescription;