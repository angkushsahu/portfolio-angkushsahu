import styles from "./styles.module.scss";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input, Loading, Textarea } from "components";
import Layout from "hoc";

function Contact() {
    document.title = "Contact - Angkush Sahu";
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FieldValues>({
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    const onContact: SubmitHandler<FieldValues> = async (data) => {
        try {
            const response = await fetch("https://formspree.io/f/xjvlnwka", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                toast.success("Mail sent successfully");
                reset();
            } else toast.error("Unable to send email");
        } catch (error: any) {
            toast.error((error.message as string) || "Unable to send email");
        }
    };

    if (isSubmitting) {
        return <Loading isComponent />;
    }
    return (
        <section className={styles.contact}>
            <h1>Contact</h1>
            <div>
                <form onSubmit={handleSubmit(onContact)}>
                    <Input
                        id="name"
                        title="Enter your name"
                        label="Name"
                        error={errors.name}
                        register={register("name", { required: { message: "Please enter your name", value: true } })}
                    />
                    <Input
                        type="email"
                        id="email"
                        title="Enter your e-mail address"
                        label="E-mail"
                        error={errors.email}
                        register={register("email", {
                            required: { message: "Please enter your e-mail address", value: true },
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" },
                        })}
                    />
                    <Input
                        id="subject"
                        title="Enter your subject"
                        label="Subject"
                        error={errors.subject}
                        register={register("subject", { required: { message: "Please enter subject of the e-mail", value: true } })}
                    />
                    <Textarea
                        id="message"
                        title="Enter what you want to say"
                        label="Your Message ....."
                        error={errors.message}
                        register={register("message", { required: { message: "Please enter your message for me", value: true } })}
                    />
                    <button type="submit" className={`cta_button ${styles.send_button}`} disabled={isSubmitting} title="Send e-mail">
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
