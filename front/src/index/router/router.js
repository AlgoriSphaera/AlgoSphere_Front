import { createBrowserRouter, Navigate } from "react-router-dom";

import ErrorPage from '../../components/pages/ErrorPage/ErrorPage';
import FormPage from '../../components/pages/FormPage/FormPage';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from "../../components/SignInForm/SignInForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <FormPage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/register",
                element: <SignUpForm/> 
            },
            {
                path: "/login",
                element: <SignInForm/>
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/login"/>
    }
]);

export default router;