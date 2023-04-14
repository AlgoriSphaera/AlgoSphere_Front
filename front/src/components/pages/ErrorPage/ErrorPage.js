import { useRouteError } from "react-router-dom";

import "./ErrorPage.scss";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="ErrorPage">
            <p>Something went wrong...</p>
            <p>Status: {error.statusText}</p>
            <p>Message: {error.message}</p>
        </div>
    );
}

export default ErrorPage;