import ContractorHeader from "../component/ContractorHeader";
import ContractorSidebar from "../component/ContractorSidebar";
import Header from "../component/CustomerHeader";
import { Outlet } from "react-router-dom";

const ContractorPrivateLayout = () => {
    return (
        <div className="d-flex">
            <ContractorSidebar />

            <div className="flex-grow-1 p-2 overflow-hidden">
                <div className="right-side-color">
                    <ContractorHeader buttonText="Publish Project" />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ContractorPrivateLayout;