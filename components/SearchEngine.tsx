export default function SearchEngine({ url, icon, name }) {
    return (
        <a href={url} className="button is-medium" target="_blank">
            <img
                src={icon}
                alt={name}
                style={{ width: "15px", height: "15px" }}
            />
            &nbsp;{name}
        </a>
    )
}