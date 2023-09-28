import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import { Link } from 'react-router-dom';
import bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.min";
import { Provider } from "react-redux";
import {store} from "./app/store";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./features/Home/Home";
import HospitalDetails from "./features/hospitaldetails/HospitalDetails";
import AdminDashBoard from './features/Admin/AdminDashBoard';
import AddHospital from './features/Admin/AddHospital';
import AddBed from "./features/Admin/AddBed";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
        {
            path:"/admindash",
            element:<AdminDashBoard></AdminDashBoard>,
            children:[
              {
                path:"/admindash/addhospital",
                element:<AddHospital></AddHospital>,
            },
            {
              path:"/admindash/addbed",
              element:<AddBed></AddBed>,
          }
          ]
        },
        {
          path:"/details/:id",
          element:<HospitalDetails></HospitalDetails>,
        },
        {
          path:"",
          element:<Home></Home>
        }

    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<RouterProvider router={router} />
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
