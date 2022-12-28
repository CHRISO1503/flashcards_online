import { useState, useEffect } from "react";
import "./App.css";

interface testData {
    message: string;
}

export default function App() {
    const user = { userName: "bobb" };
    const [testResponse, setTestResponse] = useState<testData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/test");
            console.log(res);
            const data = await res.json();
            setTestResponse(data);
        };
        fetchData();
    }, []);
    return (
        <div>
            {testResponse ? <p>{testResponse.message}</p> : <p>loading...</p>}
        </div>
    );
}
