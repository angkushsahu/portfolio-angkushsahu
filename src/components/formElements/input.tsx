import styles from "./styles.module.scss";
import { InputProps } from "./types";

export default function Input({ error, id, label, register, title, type = "text" }: InputProps) {
    return (
        <div className={styles.contain_input}>
            <input type={type} id={id} {...register} title={title} placeholder=" " className={error ? styles.error_border : ""} />
            <label htmlFor={id}>{label}</label>
            <p className={styles.error}>{error?.message?.toString()}</p>
        </div>
    );
}
