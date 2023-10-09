import React, { useEffect, useState } from "react";
import { useOutletContext, Link, useRouteError } from "react-router-dom";

import error_icon from './error.svg';
import './Error.css';


function Error(props) {
    const [ currentError, setError ] = useState();

    useEffect(() => {
        if (!props["error"]) {
            setError(() => "404 Not Found")
        } else {
            setError(() => props.error)
        }
    }, [])

    function buildReportLink() {
        const base = `https://github.com/scienceappreciation/pettit-client/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=`
        const url = base + encodeURIComponent(currentError);
        return url;
    }


    return (
    <article className="container">
        <h1 className="error-message">Error {currentError}</h1>
        <img src={error_icon} alt="Derpy pug" className="error-icon" />
        <ul role="presentation" className="return-links">
            <li>
                <Link to="/">Back to Front Page</Link>
            </li>
            <li>
                <Link to={buildReportLink()}>Report to Developers</Link>
            </li>
        </ul>

    </article>)
}

export default Error;