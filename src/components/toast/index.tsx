import { Toaster } from "react-hot-toast";

export default function Toast() {
    return (
        <Toaster
            toastOptions={{
                style: {
                    background: "#252525",
                    color: "#ffffff",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                },
            }}
        />
    );
}
