export default function ({ disableContent }: { disableContent: boolean }) {
    return (
        <div className="card-menu">
            <button
                className={"card-menu".concat(
                    disableContent ? " no-hover" : ""
                )}
                disabled={disableContent}
            >
                <p className="card-menu-icon">o</p>
                <h1 className="card-menu">Open a deck</h1>
            </button>
            <button
                className={"card-menu".concat(
                    disableContent ? " no-hover" : ""
                )}
                disabled={disableContent}
            >
                <p className="card-menu-icon">+</p>
                <h1 className="card-menu">Create a deck</h1>
            </button>
            <button
                className={"card-menu".concat(
                    disableContent ? " no-hover" : ""
                )}
                disabled={disableContent}
            >
                <p className="card-menu-icon">e</p>
                <h1 className="card-menu">Edit a deck</h1>
            </button>
        </div>
    );
}
