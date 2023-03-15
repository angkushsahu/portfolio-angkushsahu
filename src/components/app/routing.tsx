import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import routes from "./routes";
import * as Components from "./lazyImports";

const routing = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path={routes.home} element={<Components.Home />} />
            <Route path={routes.about} element={<Components.About />} />
            <Route path={routes.contact} element={<Components.Contact />} />
            {/* <Route path={routes.experience} element={<Components.Experience />} /> */}
            <Route path={routes.projects} element={<Components.Projects />} />
            <Route path="*" element={<Components.Error />} />
        </Route>
    )
);

export default routing;
