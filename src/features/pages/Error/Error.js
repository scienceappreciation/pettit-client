import React, { useEffect } from "react";
import { useOutletContext, Link, useRouteError } from "react-router-dom";

import error_icon from './error.svg';


function Error() {
    const [ error, setError ] = useOutletContext();
    const RouteError = useRouteError();

    useEffect(() => {
        if (RouteError.statusText || RouteError.message) {
            console.log(RouteError.message);
            setError(() => RouteError.statusText);
        }
    }, [])


    return (
    <article className="container">
        <h1>Error {error}</h1>
        <svg>
            {error_icon}
        </svg>
        <ul role="presentation">
            <li>
                <Link to="/">Back to Front Page</Link>
            </li>
            <li>
                <Link to="#">Report to Developers</Link>
            </li>
        </ul>

    </article>)
}

export default Error;