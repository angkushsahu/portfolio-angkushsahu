import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routing } from "components/app";
import { Loading } from "components";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    return (
        <main className="parent_root">
            <div className="shape_1"></div>
            <div className="shape_2"></div>
            <div className="child_root">
                <Suspense fallback={<Loading />}>
                    <RouterProvider router={routing} />
                </Suspense>
            </div>
            <ToastContainer position="top-center" theme="dark" />
        </main>
    );
}
