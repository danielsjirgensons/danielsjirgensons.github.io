// import Homepage from "./pages/Homepage/Home";

const Routes = () => {
    const pageRoutes = [
        {
            name: "Home",
            path: "/",
            // template: <Homepage />
        },
        {
            name: "Portfolio",
            path: "/portfolio",
            // template: (<div>Portfolio</div>)
        }
    ];
    return pageRoutes;
};

export default Routes;
