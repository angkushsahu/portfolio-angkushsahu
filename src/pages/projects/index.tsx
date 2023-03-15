import styles from "./styles.module.scss";
import { VscGithub } from "react-icons/vsc";
import Layout from "hoc";
import { projectData } from "utils";
import imageNotFound from "assets/no_image.svg";

function Projects() {
    document.title = "Projects - Angkush Sahu";
    return (
        <section className={styles.projects}>
            <h1>Projects</h1>
            <div className={styles.project_wrapper}>
                {projectData.map((project) => (
                    <a
                        href={project.goLive}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`Visit ${project.title}`}
                        title={`Visit ${project.title}`}
                        key={project.title}
                    >
                        <article className={styles.project_card}>
                            <div className={styles.image_card}>
                                <img
                                    src={project.image ? project.image : imageNotFound}
                                    alt={`Go to ${project.title}`}
                                    loading="lazy"
                                    className={project.image ? styles.no_image : ""}
                                />
                            </div>
                            <div className={styles.data_card}>
                                <p>{project.title}</p>
                                <a
                                    href={project.github}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Visit github repository"
                                    title="Visit github repository"
                                    key={project.title}
                                >
                                    <VscGithub className={styles.github_icon} title="Visit github repository" />
                                </a>
                            </div>
                        </article>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Layout(Projects);
