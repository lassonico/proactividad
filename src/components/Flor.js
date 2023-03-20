
export default function Flor (props) {
    return(
        <svg
            id="flor"
            xmlns="http://www.w3.org/2000/svg"
            width={47}
            height={51.288}
            className="animate-spin"
            viewBox="115.55 31 316 344.289"
            xmlSpace="preserve"
            {...props}
        >
            <path
                id="petalo1"
                opacity={0.8}
                fill="#87CEEB"
                d="m299.06 184.958-12.624 75.014-12.724 74.888-53.912-48.583-53.812-48.466 12.731-75.003 12.73-75.008 53.804 48.577z"
            />
            <path
                id="petalo2"
                opacity={0.8}
                fill="#1E90FF"
                d="m381.111 237.811-53.912 48.593-53.817 48.456-12.719-74.888-12.621-75.014 53.803-48.581 53.912-48.586 12.624 75.017z"
            />
            <path
                id="petalo3"
                fill="#00BFFF"
                d="m344.222 203.145-35.334 65.91-35.338 65.91-35.336-65.91-35.338-65.91 35.338-66.028 35.336-65.793 35.338 65.91z"
            />
        </svg>
    )
}