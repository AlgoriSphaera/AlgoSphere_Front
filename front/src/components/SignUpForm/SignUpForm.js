import "./SignUpForm.scss";

function SignUpForm() {
    return (
        <form method="POST" action="http://localhost:8080/authentication/signUp"
            className="SignUpForm">
            <h1>Register</h1>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Register" />
        </form>
    );
}

export default SignUpForm;