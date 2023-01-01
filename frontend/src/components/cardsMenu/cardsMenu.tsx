import CardsMenuHomeButton from "./cardsMenuButton";

export default function CardsMenu({
    disableContent,
}: {
    disableContent: boolean;
}) {
    return (
        <div className="card-menu">
            <CardsMenuHomeButton
                disableContent={disableContent}
                icon={"o"}
                label="Open a deck"
                navigateTo="open-deck"
            />
            <CardsMenuHomeButton
                disableContent={disableContent}
                icon={"+"}
                label="Create a deck"
                navigateTo="create-deck"
            />
            <CardsMenuHomeButton
                disableContent={disableContent}
                icon={"m"}
                label="Manage decks"
                navigateTo="manage-decks"
            />
        </div>
    );
}
