import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface testData {
    message: string;
}

export default function App() {
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
        <>
            <div>
                {testResponse ? (
                    <p>{testResponse.message}</p>
                ) : (
                    <p>loading...</p>
                )}
            </div>
            <Link to="/login">
                log-in / register
            </Link>
        </>
    );
}
