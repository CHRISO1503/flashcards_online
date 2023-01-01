import TopBar from "../components/topBar";
import { useState } from "react";

export default function CreateDeck() {
    const [state, updateState] = useState(0);

    return <TopBar />;
}
