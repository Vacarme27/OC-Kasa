import { createBrowserRouter} from "react-router-dom";
import HomePage from '../pages/Homepage.jsx'
import ApartmentPage from '../pages/ApartmentPage.jsx'
import HeaderFooterLayout from "../layout/HeaderFooterLayout.jsx";
import About from '../pages/About.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/apartment",
        element: (
          <ApartmentPage />
        )
      },
      {
        path: "/about",
        element: (
          <About />
        )
      }
    ]
  }
]);

export default router;