import { useNavigate } from "react-router-dom";

export default function CardsMenuButton({
    disableContent,
    icon,
    label,
    navigateTo,
}: {
    disableContent: boolean;
    icon: string;
    label: string;
    navigateTo: string;
}) {
    const navigate = useNavigate();

    return (
        <button
            className={"card-menu".concat(disableContent ? " no-hover" : "")}
            disabled={disableContent}
            onClick={() => navigate(navigateTo)}
        >
            <p className="card-menu-icon">{icon}</p>
            <h1 className="card-menu">{label}</h1>
        </button>
    );
}
