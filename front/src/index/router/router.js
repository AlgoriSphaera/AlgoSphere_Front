import {
    createBrowserRouter
  } from "react-router-dom";
  
  import App from '../../components/App/App';
  import ErrorPage from '../../components/pages/ErrorPage/ErrorPage';
  import FormPage from '../../components/pages/FormPage/FormPage';
  import SignUpForm from '../../components/SignUpForm/SignUpForm';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
        {
            path: "/login",
            element: <FormPage/>
        }
        ]
    }
]);

export default router;