import imageNotFound from "assets/no_image.svg";
import { VscGithub } from "react-icons/vsc";
import styles from "./styles.module.scss";

interface ProjectDataProps {
    project: {
        title: string;
        github: string;
        goLive: string;
        image: string;
    };
}

export default function ProjectCard({ project }: ProjectDataProps) {
    return (
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
                    <img src={project.image ? project.image : imageNotFound} alt={`Go to ${project.title}`} loading="lazy" />
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
    );
}
