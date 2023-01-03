import { useState, FormEvent } from "react";
import "../index.css";

export default function LoginPopup({
    setLoginState,
}: {
    setLoginState: (value: boolean) => void;
}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const userErrorMessages = [
        "Enter username and password to register or login",
        "User does not exist",
        "Password and username do not match",
        "Account registered",
        "Username taken",
        "Something went wrong",
        "Invalid username",
        "Please enter a password",
        "Registration successful",
    ];
    const [userErrorMessage, setUserErrorMessage] = useState(
        userErrorMessages[0]
    );

    async function handleRegister(e: FormEvent, isRegistered: boolean) {
        e.preventDefault();
        if (username.indexOf(" ") != -1 || username == "") {
            setUserErrorMessage(userErrorMessages[6]);
            return;
        }
        if (password.indexOf(" ") != -1 || password == "") {
            setUserErrorMessage(userErrorMessages[7]);
            return;
        }
        if (isRegistered) {
            let status200 = false;
            await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then((response) => {
                    if (response.status == 200) {
                        status200 = true;
                    }
                    return response.json();
                })
                .then((data) => {
                    if (status200) {
                        localStorage.setItem("jwt", data.token);
                        localStorage.setItem("currentUser", username);
                        setLoginState(false);
                    } else if (data.message == "No such user exists") {
                        setUserErrorMessage(userErrorMessages[1]);
                    } else if (data.message == "Incorrect password") {
                        setUserErrorMessage(userErrorMessages[2]);
                    } else {
                        setUserErrorMessage(userErrorMessages[5]);
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
                .then((response) => {
                    if (response.status == 201) {
                        setUserErrorMessage(userErrorMessages[8]);
                    } else if (response.status == 409) {
                        setUserErrorMessage(userErrorMessages[4]);
                    }
                    return response.json();
                })
                .catch((error) => console.error(error));
        }
        setPassword("");
    }

    return (
        <div className="popup">
            <h1 className="form-style">Log in or register your account</h1>
            <form
                onSubmit={(e) => handleRegister(e, true)}
                className="form-style"
            >
                <label className="form-style">
                    Username
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-style"
                    />
                </label>
                <label className="form-style">
                    Password
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-style"
                    />
                </label>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                    <input
                        type="submit"
                        value={"Login"}
                        onClick={(e) => handleRegister(e, true)}
                        className="form-style login"
                    />
                    <input
                        type="submit"
                        value={"Register"}
                        onClick={(e) => handleRegister(e, false)}
                        className="form-style sign-up"
                    />
                </div>
            </form>
            <p className="form-style">{userErrorMessage}</p>
        </div>
    );
}
