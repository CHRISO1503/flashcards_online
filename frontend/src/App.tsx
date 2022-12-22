import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
    const [backendData, setBackendData] = useState([{}]);
    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => {
                setBackendData(data);
            });
    }, []);
    // useEffect(() => {
    //     fetch("http://localhost:5000/api").then((response) => console.log(response));
    // }, []);

    return <div></div>;
}
