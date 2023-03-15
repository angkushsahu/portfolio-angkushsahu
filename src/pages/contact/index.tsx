import styles from "./styles.module.scss";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Loading } from "components";
import { validateEmail } from "utils";
import Layout from "hoc";

function Contact() {
    document.title = "Contact - Angkush Sahu";
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [loading, setLoading] = useState(false);

    async function onContact(e: FormEvent) {
        e.preventDefault();

        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const subject = subjectRef.current?.value;
        const message = messageRef.current?.value;

        if (!name || !email || !subject || !message) {
            toast.warn("Please enter all the fields");
            return;
        }

        if (!validateEmail(email)) {
            toast.warn("Please enter a valid email address");
            return;
        }

        const data = { name, email, subject, message };

        try {
            setLoading(true);
            const response = await fetch("https://formspree.io/f/xjvlnwka", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                toast.success("Mail sent successfully");
                if (nameRef.current && emailRef.current && subjectRef.current && messageRef.current) {
                    nameRef.current.value = "";
                    emailRef.current.value = "";
                    subjectRef.current.value = "";
                    messageRef.current.value = "";
                }
            } else {
                toast.error("Unable to send email");
            }
        } catch (e: any) {
            toast.error((e.message as string) || "Unable to send email");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loading isComponent />;
    }
    return (
        <section className={styles.contact}>
            <h1>Contact</h1>
            <div>
                <form onSubmit={onContact}>
                    <div className={styles.input_container} onClick={() => nameRef.current?.focus()}>
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" name="name" id="name" ref={nameRef} placeholder="e.g. John Doe" required />
                    </div>
                    <div className={styles.input_container} onClick={() => emailRef.current?.focus()}>
                        <label htmlFor="email">Enter your email</label>
                        <input type="email" name="email" id="email" ref={emailRef} placeholder="e.g. johndoe@gmail.com" required />
                    </div>
                    <div className={styles.input_container} onClick={() => subjectRef.current?.focus()}>
                        <label htmlFor="subject">Enter your subject</label>
                        <input type="text" name="subject" id="subject" ref={subjectRef} placeholder="e.g. awesome portfolio" required />
                    </div>
                    <div className={styles.input_container} onClick={() => messageRef.current?.focus()}>
                        <label htmlFor="message">Enter your message</label>
                        <textarea name="message" id="message" ref={messageRef} placeholder="e.g. Hey there, ...." required></textarea>
                    </div>
                    <button type="submit" className={`cta_button ${styles.send_button}`} disabled={loading} title="Send e-mail">
                        Send
                    </button>
                </form>
                <section className={styles.side_animation}>
                    <div className={styles.circle_container}>
                        <div className={styles.circle}></div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Layout(Contact);
