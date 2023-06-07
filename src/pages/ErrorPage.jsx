import './ErrorPage.scss'
import Navbar from '../components/Navbar';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import {Link} from "react-router-dom";

function ErrorPage(){
return (
    <>
    <Navbar/>
        <Main>
            <div className='error__page'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
                <div>
                    <Link to ="/">Retourner sur la page d&apos;accueil </Link>
                </div>
            </div>
        </Main>    
    <Footer/>
    </>
    
);
}

export default ErrorPage;