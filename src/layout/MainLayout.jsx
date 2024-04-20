import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;