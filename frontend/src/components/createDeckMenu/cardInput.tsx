export default function CardInput({
    label,
    value,
    setValue,
}: {
    label: string;
    value: string;
    setValue: (value: string) => void;
}) {
    return (
        <label style={{ color: "black" }}>
            {label} <br />
            <input
                type="text"
                className="form-style"
                style={{ width: "90%", margin: "10px" }}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </label>
    );
}
