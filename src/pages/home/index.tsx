import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import linkedInIcon from "assets/linkedin.svg";
import githubIcon from "assets/github.svg";
import { routes } from "components/app";
import Layout from "hoc";

function Home() {
    document.title = "Home - Angkush Sahu";

    return (
        <section className={styles.home}>
            <div>
                <h1 className={styles.doc_heading}>
                    <span className={styles.subheading}>Hey, this is</span>
                    <span className={styles.heading}>Angkush Sahu</span>
                </h1>
                <h2 className={styles.thirdheading}>A full-stack developer with proficiency in DSA</h2>
                <div className={styles.links}>
                    <a
                        href="https://www.linkedin.com/in/angkush-sahu-0409311bb"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Visit my Linked-in account"
                        title="Visit my Linked-in account"
                    >
                        <img src={linkedInIcon} alt="linked-in" loading="lazy" />
                    </a>
                    <a
                        href="https://github.com/angkushsahu"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Visit my Github account"
                        title="Visit my Github account"
                    >
                        <img src={githubIcon} alt="github" loading="lazy" />
                    </a>
                </div>
                <div className={styles.button_section}>
                    <Link to={routes.projects} title="Visit projects page">
                        <button type="button">Projects</button>
                    </Link>
                    <a
                        href="https://drive.google.com/file/d/10sPB1KvlbEG0QWgZqcdCgODKqZj5J7WV/view"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Download My Resume"
                        title="Download My Resume"
                        className={styles.resume_button}
                    >
                        <button className="cta_button" type="button">
                            Resume
                        </button>
                    </a>
                    <Link to={routes.contact} title="Contact me">
                        <button type="button">Contact</button>
                    </Link>
                </div>
            </div>
            <div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
            </div>
        </section>
    );
}

export default Layout(Home);
