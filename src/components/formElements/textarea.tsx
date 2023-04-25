import styles from "./styles.module.scss";
import { InputProps } from "./types";

export default function Textarea({ error, id, label, register, title }: InputProps) {
    return (
        <div className={styles.contain_input}>
            <textarea id={id} {...register} title={title} placeholder=" " className={error ? styles.error_border : ""}></textarea>
            <label htmlFor={id}>{label}</label>
            <p className={styles.error}>{error?.message?.toString()}</p>
        </div>
    );
}
