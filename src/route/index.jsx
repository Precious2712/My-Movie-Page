import HelpCenters from "@/helpcenter";
import MoviesCienmaZone from "@/tvfilms";

import AllDocument from "@/zashboard/AllDocument";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <AllDocument />
    },
    {
        path: 'movies',
        element: <MoviesCienmaZone />
    },
    {
        path: '/HelpCenter',
        element: <HelpCenters />
    }
]); 