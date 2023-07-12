import {Outlet} from "react-router-dom";
import Navbar from '../components/Navbar.jsx';
import Footer from '../layout/Footer.jsx';
import Main from "../layout/Main.jsx";

const HeaderFooterLayout = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
  };

  export default HeaderFooterLayout;