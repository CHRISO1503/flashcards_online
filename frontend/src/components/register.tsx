import { useState, useEffect, KeyboardEvent, FormEvent } from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(e: FormEvent, isRegistered: boolean) {
        e.preventDefault();
        if (isRegistered) {
            console.log("LOGGINGIN");
            await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error));
        } else {
            console.log("REGISTERING");
            await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error));
        }

        setUsername("");
        setPassword("");
    }

    return (
        <form onSubmit={(e) => handleRegister(e, true)}>
            <label>
                username:
                <br />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <input
                type="submit"
                value={"Login"}
                onClick={(e) => handleRegister(e, true)}
            />
            <input
                type="submit"
                value={"Register"}
                onClick={(e) => handleRegister(e, false)}
            />
        </form>
    );
}
