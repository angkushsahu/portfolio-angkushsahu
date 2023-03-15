import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { routes } from "components/app";

export default function Error() {
    document.title = "404 - Angkush Sahu";
    return (
        <section className={styles.error}>
            <h1>404</h1>
            <h2>Looks like you are lost, let's get you back on track</h2>
            <Link to={routes.home} replace title="Back to home">
                <button type="button" className="cta_button">
                    Back to home
                </button>
            </Link>
        </section>
    );
}
