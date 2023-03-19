import { Suspense, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routing } from "components/app";
import { Loading, SplashScreen } from "components";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    const sessionItem = "splashScreen";
    const showFlashScreen = sessionStorage.getItem(sessionItem);
    const [splash, setSplash] = useState(showFlashScreen ? false : true);
    setTimeout(() => {
        setSplash(false);
        sessionStorage.setItem(sessionItem, "true");
    }, 3800);

    return (
        <main className="parent_root">
            <div className="shape_1"></div>
            <div className="shape_2"></div>
            {splash ? (
                <SplashScreen />
            ) : (
                <div className="child_root">
                    <Suspense fallback={<Loading />}>
                        <RouterProvider router={routing} />
                    </Suspense>
                </div>
            )}
            <ToastContainer position="top-center" theme="dark" />
        </main>
    );
}
