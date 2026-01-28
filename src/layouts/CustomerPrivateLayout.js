import CustomerSidebar from "../component/CustomerSidebar";
import { Outlet } from "react-router-dom";
import CustomerHeader from "../component/CustomerHeader";

const CustomerPrivateLayout = () => {
    return (
        <div className="d-flex">
            <CustomerSidebar />

            <div className="flex-grow-1 p-2 overflow-hidden">
                <div className="right-side-color">
                    <CustomerHeader buttonText="Create Project" />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default CustomerPrivateLayout;