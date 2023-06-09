import { useRouteError } from "react-router-dom";

import "./ErrorPage.scss";

function ErrorPage() {
    const error = useRouteError();

    return (
        <main className="ErrorPage">
            <div className="ErrorInfo">
                <p>Something went wrong...</p>
                <p>Status: {error.statusText}</p>
                <p>Message: {error.message}</p>
            </div>
        </main>
    );
}

export default ErrorPage;