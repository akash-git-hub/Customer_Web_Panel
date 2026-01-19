import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
    return (
        <div className="d-flex">
            <Sidebar />

            <div className="flex-grow-1 p-2 overflow-hidden">
                <div className="right-side-color">
                    <Header buttonText="Create Project" />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PrivateLayout;