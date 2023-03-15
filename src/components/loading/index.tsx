import styles from "./styles.module.scss";

interface LoadingProps {
    isComponent?: boolean;
}

export default function Loading({ isComponent }: LoadingProps) {
    return (
        <section className={`${styles.loading} ${isComponent ? styles.cancelHeaderHeight : ""}`}>
            <h1>&lt;AS &#47;&gt;</h1>
        </section>
    );
}
