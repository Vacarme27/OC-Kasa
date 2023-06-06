import { createBrowserRouter} from "react-router-dom";
import HomePage from '../pages/Homepage.jsx'
import ApartmentPage from '../pages/ApartmentPage.jsx'
import HeaderFooterLayout from "../layout/HeaderFooterLayout.jsx";

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: (
      <HeaderFooterLayout>
        <h1>Oups erreur 404</h1>
      </HeaderFooterLayout>
    ),
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
          <h1>A Propos</h1>
        )
      }
    ]
  }
]);

export default router;