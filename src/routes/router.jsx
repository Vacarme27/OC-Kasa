import { createBrowserRouter} from "react-router-dom";
import HomePage from '../pages/Homepage.jsx'
import ApartmentPage from '../pages/ApartmentPage.jsx'
import HeaderFooterLayout from "../layout/HeaderFooterLayout.jsx";
import About from '../pages/About.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'

const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,    
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: '/apartment/:id',
                element: <ApartmentPage />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/*",
                element : <ErrorPage />
            }
        ]
    }
]);

export default router;