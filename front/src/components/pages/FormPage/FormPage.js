import { Outlet } from "react-router-dom";

import "./FormPage.scss";

function FormPage() {
    return (
        <main className="FormPage">
            <Outlet/>
        </main>
    );
}

export default FormPage;