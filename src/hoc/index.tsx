import { Header } from "components";

export default function Layout(Component: () => JSX.Element) {
    return function () {
        return (
            <>
                <Header />
                <Component />
            </>
        );
    };
}
