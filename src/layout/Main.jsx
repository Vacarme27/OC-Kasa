import PropTypes from "prop-types";
import "./Main.scss";

function Main({ children }) {    
    return <div className="main">{children}</div>
}

Main.proptypes={
    children: PropTypes.string.isRequired
};

export default Main;