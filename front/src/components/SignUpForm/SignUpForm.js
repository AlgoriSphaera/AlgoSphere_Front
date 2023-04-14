import "./SignUpForm.scss";

function SignUpForm() {
    return (
        <form
            className="SignUpForm">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default SignUpForm;