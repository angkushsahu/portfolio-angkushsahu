import styles from "./styles.module.scss";
import Layout from "hoc";
import { projectData } from "utils";
import { ProjectCard } from "components";

function Projects() {
    document.title = "Projects - Angkush Sahu";
    return (
        <section className={styles.projects}>
            <h1>Projects</h1>
            <div className={styles.project_wrapper}>
                {projectData.map((project) => (
                    <ProjectCard key={project.title} project={{ ...project }} />
                ))}
            </div>
        </section>
    );
}

export default Layout(Projects);
