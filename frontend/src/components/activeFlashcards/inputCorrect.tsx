import { useEffect, useState } from "react";
import { DBCard } from "../../routes/manageDecks";

export default function InputCorrect({
    frontBack,
    setFrontBack,
    cardStack,
    setCardStack,
    completedCards,
    setCompletedCards,
}: {
    frontBack: boolean;
    setFrontBack: (value: boolean) => void;
    cardStack: DBCard[];
    setCardStack: (value: DBCard[]) => void;
    completedCards: DBCard[];
    setCompletedCards: (value: DBCard[]) => void;
}) {
    const [wasCorrect, setWasCorrect] = useState(false);
    const [answered, setAnswered] = useState(false);

    useEffect(() => {
        if (answered) {
            let stack = cardStack;
            let completed = completedCards;
            if (wasCorrect) {
                completed.push(cardStack[0]);
                setCompletedCards(completed.slice());
                stack.shift();
                setCardStack(stack.slice());
            } else {
                stack.push(stack[0]);
                stack.shift();
                setCardStack(stack.slice());
            }
            setFrontBack(false);
            setAnswered(false);
        } else {
            return;
        }
    }, [answered]);

    if (frontBack) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    height: "50px",
                }}
            >
                <input
                    type="button"
                    className="card-active light"
                    value="Failed"
                    onClick={() => {
                        setWasCorrect(false);
                        setAnswered(true);
                    }}
                />
                <input
                    type="button"
                    className="card-active light"
                    value="Completed"
                    onClick={() => {
                        setWasCorrect(true);
                        setAnswered(true);
                    }}
                />
            </div>
        );
    } else {
        return (
            <div
                style={{ display: "flex", marginTop: "20px", height: "50px" }}
            />
        );
    }
}
