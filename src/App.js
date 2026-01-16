import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Projects from "./pages/project/Project";
import ProjectDetail from "./pages/project/ProjectDetail";
import Auth from './services/Auth';
import PublicAuth from "./services/PublicAuth";
import ContractorProfile from "./pages/contractor/ContractorProfile";
import ChatMessages from "./pages/messages/ChatMessages";
import LicenseVerificationDetail from "./pages/licenseVerification/LicenseVerificationDetail";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassoword";
import VerificationCode from "./pages/VerificationCode";
import SetLocation from "./pages/SetLocation";
import Home from "./pages/home/Home";

import Space from "./pages/space/Space";
import CreateProject from "./pages/project/createProject/CreateProject";
import ProjectForm from "./pages/project/createProject/ProjectForm";
import SearchContractor from "./pages/searchContractor/SearchContractor";
import MyProfile from "./pages/profile/MyProfile";
import EditProfile from "./pages/profile/EditProfile";
import Setting from "./pages/setting/Setting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicAuth />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgot_password" element={<ForgotPassword/>} />
          <Route path="/change_password" element={<ChangePassword/>} />
          <Route path="/verification_code" element={<VerificationCode/>} />
          <Route path="/set_location" element={<SetLocation/>} />
        </Route>
        {/* Customer routes */}
        <Route element={<Auth />}>
          <Route path="/home" element={<Home/>} />
          <Route path="/space" element={<Space />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/create_project" element={<CreateProject />} />
          <Route path="/create_project_form" element={<ProjectForm />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/search_contractor" element={<SearchContractor />} />
          <Route path="/contractor-profile" element={<ContractorProfile />} />
          <Route path="/messages" element={<ChatMessages />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/edit_profile" element={<EditProfile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/license_verification_detail" element={<LicenseVerificationDetail />} />



          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/contractors" element={<ContractorList />} />
          <Route path="/transaction_history" element={<TransactionHistory />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/license_verification" element={<LicenseVerification />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          <Route path="/dispute" element={<DisputeList />} />
          <Route path="/service_list" element={<ServiceList />} />
          <Route path="/create_service" element={<CreateService />} />
          <Route path="/template_list" element={<TemplateList />} />
          <Route path="/create_template" element={<CreateTemplate />} />
          <Route path="/platform_fee" element={<PlatformFee/>} />
          <Route path="/offer" element={<Offer />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
