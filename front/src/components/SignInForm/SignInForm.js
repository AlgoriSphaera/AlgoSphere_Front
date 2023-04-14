import { NavLink } from "react-router-dom";
import "./SignInForm.scss";

function SignInForm() {
    return (
        <form method="POST" action="http://localhost:8080/authentication/signIn"
            className="SignInForm">
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Login" />
            <p>Not registered?<NavLink to="/register">Register!</NavLink></p>
        </form>
    );
}

export default SignInForm;