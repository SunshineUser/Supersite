import React from "react"
import ReactDOM from "react-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom";


import Rubix from "./components/rubix";
import ErrorPage from "./components/errorpage";
import Home from "./components/home";
import Homepage from "./components/homepage";




const appElement = document.getElementById("app")


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path:"/rubix",
                element: <Rubix />
            }
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));