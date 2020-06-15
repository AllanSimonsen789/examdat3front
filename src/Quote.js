import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import URLS from "./Settings";

export function Quote() {
    return (
        <div>
            {Fetching()}
        </div>
    );
}

function Fetching() {
    const [dataFromServer, setDataFromServer] = useState("Loading...");
    useEffect(() => {
        facade.fetchData(URLS.Quote()).then((data) => {
            let returnData = "";
            returnData += "Chuck norris Qoute" + data.chuckQoute.value;
            returnData += "Kanye Qoute" + data.kanyeRestQoute.quote;
            setDataFromServer(returnData);
            console.log(returnData);
        });
    }, []);
    return (
        <React.Fragment>
            <h1>Chuck Norris Qoute</h1>
            <p>{dataFromServer}</p>
        </React.Fragment>
    );
}