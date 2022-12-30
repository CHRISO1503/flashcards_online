import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(e: FormEvent, isRegistered: boolean) {
        e.preventDefault();
        if (isRegistered) {
            await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.code == 201) {
                        localStorage.setItem("jwt", data.token);
                        navigate("/");
                    }
                })
                .catch((error) => console.error(error));
        } else {
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
        <div className="register">
            <h1 className="register">Log in or register your account</h1>
            <form
                onSubmit={(e) => handleRegister(e, true)}
                className="register"
            >
                <label className="register">
                    Username
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="register"
                    />
                </label>
                <label className="register">
                    Password
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="register"
                    />
                </label>
                <div style={{ display: "flex" }}>
                    <input
                        type="submit"
                        value={"Register"}
                        onClick={(e) => handleRegister(e, false)}
                        className="register sign-up"
                    />
                    <input
                        type="submit"
                        value={"Login"}
                        onClick={(e) => handleRegister(e, true)}
                        className="register login"
                    />
                </div>
            </form>
        </div>
    );
}
