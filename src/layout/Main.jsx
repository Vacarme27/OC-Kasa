import PropTypes from "prop-types";
import "./Main.scss";

function Main({ children }) {    
    return <main className="main">{children}</main>
}

Main.proptypes={
    children: PropTypes.string.isRequired
};

export default Main;