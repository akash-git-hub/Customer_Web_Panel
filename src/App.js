import { Route, Routes } from "react-router-dom";
import './App.css';
import PrivateLayout from "./layouts/CustomerPrivateLayout";
import Login from "./main/Login";
import ProjectDetail from "./main/customer/pages/project/ProjectDetail";
import Auth from './services/Auth';
import PublicAuth from "./services/PublicAuth";
import ContractorProfile from "./main/customer/pages/contractor/ContractorProfile";
import ChatMessages from "./main/customer/pages/messages/ChatMessages";
import LicenseVerificationDetail from "./main/customer/pages/licenseVerification/LicenseVerificationDetail";
import Signup from "./main/Signup";
import ForgotPassword from "./main/ForgotPassword";
import ChangePassword from "./main/ChangePassoword";
import VerificationCode from "./main/VerificationCode";
import SetLocation from "./main/SetLocation";

// CUSTOMER PATH
import CustomerHome from "./main/customer/pages/home/CustomerHome";
import Space from "./main/customer/pages/space/CustomerSpace";
import CreateProject from "./main/customer/pages/project/createProject/CreateProject";
import ProjectForm from "./main/customer/pages/project/createProject/ProjectForm";
import SearchContractor from "./main/customer/pages/searchContractor/SearchContractor";
import MyProfile from "./main/customer/pages/profile/MyProfile";
import EditProfile from "./main/customer/pages/profile/EditProfile";
import Setting from "./main/customer/pages/setting/Setting";
import MyProject from "./main/customer/pages/project/MyProject";
import Dispute from "./main/customer/pages/setting/Dispute";

// CONTRACTOR PATH
import Home from "./main/contractor/pages/home/ContractorHome";
import CustomerSpace from "./main/customer/pages/space/CustomerSpace";
import CustomerPrivateLayout from "./layouts/CustomerPrivateLayout";
import ContractorPrivateLayout from "./layouts/ContractorPrivateLayout";
import ContractorHome from "./main/contractor/pages/home/ContractorHome";
import ContractorSpace from "./main/contractor/pages/space/ContractorSpace";
import SearchCustomer from "./main/contractor/pages/searchCustomer/SearchCustomer";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicAuth />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route path="/verification_code" element={<VerificationCode />} />
          <Route path="/set_location" element={<SetLocation />} />
        </Route>
        {/* Customer routes */}
        <Route element={<Auth />}>
          <Route element={<CustomerPrivateLayout />}>
            <Route path="/customer_home" element={<CustomerHome />} />
            <Route path="/customer_space" element={<CustomerSpace />} />
            <Route path="/my_project" element={<MyProject />} />
            <Route path="/create_project" element={<CreateProject />} />
            <Route path="/create_project_form" element={<ProjectForm />} />
            <Route path="/project-detail" element={<ProjectDetail />} />
            <Route path="/search_contractor" element={<SearchContractor />} />
            <Route path="/contractor-profile" element={<ContractorProfile />} />
            <Route path="/messages" element={<ChatMessages />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/edit_profile" element={<EditProfile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/dispute" element={<Dispute />} />
            <Route path="/license_verification_detail" element={<LicenseVerificationDetail />} />
          </Route>
        </Route>

        {/* Contractor routes */}
        <Route element={<Auth />}>
          <Route element={<ContractorPrivateLayout />}>
            <Route path="/contractor_home" element={<ContractorHome />} />
            <Route path="/contractor_space" element={<ContractorSpace />} />
            <Route path="/search_customer" element={<SearchCustomer />} />
            <Route path="/my_project" element={<MyProject />} />
            <Route path="/create_project" element={<CreateProject />} />
            <Route path="/create_project_form" element={<ProjectForm />} />
            <Route path="/project-detail" element={<ProjectDetail />} />
            <Route path="/contractor-profile" element={<ContractorProfile />} />
            <Route path="/messages" element={<ChatMessages />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/edit_profile" element={<EditProfile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/dispute" element={<Dispute />} />
            <Route path="/license_verification_detail" element={<LicenseVerificationDetail />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
