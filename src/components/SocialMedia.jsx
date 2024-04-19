import { Link } from "react-router-dom";

const SocialMedia = ({ data, styles }) => {
    // console.log("data")
    // console.log(data)

    return (
        data && data.map(item =>
            <li key={item.id} className={`list-inline-item border styles == 'fa-sm me-2' ? border-dark : border-light rounded-circle text-center`}>
                <Link
                    alt={item.title}
                    className={styles == 'fa-sm me-2' ? "text-dark" : "text-light"}
                    to={item.url}
                    target="_blank"
                    rel={item.title}
                >
                    <i className={`${item.icon} ${styles}`} />
                </Link>
            </li>
        )
    )
}

export default SocialMedia