import styles from "./styles.module.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "routing";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [toggleNavigation, setToggleNavigation] = useState(false);
    const { pathname } = useLocation();
    const links = [
        { title: "Home", path: routes.home },
        { title: "About", path: routes.about },
        // { title: "Experience", path: routes.experience },
        { title: "Projects", path: routes.projects },
        { title: "Contact", path: routes.contact },
    ];

    return (
        <>
            <header className={styles.header} id="header">
                <div className={styles.logo}>
                    <Link to={routes.home} title="Go to home page">
                        <span>&lt;AS &#47;&gt;</span>
                    </Link>
                </div>
                <nav className={styles.navbar}>
                    {links.map(({ path, title }) => (
                        <Link key={title} to={path} title={`Go to ${title} page`} className={pathname === path ? styles.active_link : ""}>
                            {title}
                        </Link>
                    ))}
                </nav>
                <RxHamburgerMenu className={styles.hamburger} onClick={() => setToggleNavigation(true)} />
            </header>
            <nav className={`${styles.mobile_nav} ${toggleNavigation ? styles.show : ""}`}>
                <IoMdClose className={styles.cancel} onClick={() => setToggleNavigation(false)} />
                {links.map(({ path, title }) => (
                    <Link key={title} to={path} title={`Go to ${title} page`} className={pathname === path ? styles.active_link : ""}>
                        {title}
                    </Link>
                ))}
            </nav>
        </>
    );
}
