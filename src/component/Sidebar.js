import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import CustomerIcon from "../Icon/CustomerIcon";
import DashboardIcon from "../Icon/DashboardIcon";
import ProjectIcon from "../Icon/ProjectIcon";
import ChatIcon from "../Icon/ChatIcon";
import SettingIcon from "../Icon/SettingIcon";
import LogoutIcon from "../Icon/LogoutIcon";
import { AuthContext } from "../states/AuthContext";
import HomeIcon from "../Icon/HomeIcon";
import SearchIcon from "../Icon/SearchIcon";
import UserProfileCard from "./UserProfileCard";

const Sidebar = () => {
  const { setLoggedIn, setProfileData } = useContext(AuthContext);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const handleLinkClick = (route) => {
    if (route) navigate(route); // Redirect to route
  };

  const logOutHandler = () => {
    localStorage.removeItem(`${process.env.REACT_APP_STORAGE_PREFIX}authToken`);
    localStorage.removeItem(`${process.env.REACT_APP_STORAGE_PREFIX}profileData`);
    localStorage.removeItem(`${process.env.REACT_APP_STORAGE_PREFIX}loggedIn`);
    setLoggedIn(false);
    setProfileData({});
    navigate("/");
  };

  return (
    <div
      className="d-flex flex-column px-3 py-4"
      style={{
        width: 300,
        // overflowY: "auto",
        height: "100vh",
      }}
    >
      {/* Logo */}
      <div className="d-flex align-items-center mb-4">
        <img
          src="/assets/Images/Tradie_Logo.png"
          alt="Tradie"
          width={64}
          className="me-3"
        />
        <h4 className="mb-0 fw-bold">TRADIE</h4>
      </div>
      <UserProfileCard
        user={{
          avatar: "https://i.pravatar.cc/300?img=12",
          name: "Duane Dean",
          email: "TradieCustomer@gmail.com",
          address: "Ritter Street, Huntsville",
        }}
      />


      <Nav className="flex-column gap-2">
        <Nav.Link
          onClick={() => handleLinkClick("/home")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/home"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <HomeIcon color={pathname === "/home" ? "#fff" : "#292D32"} />
          Home
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/search_contractor")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/search_contractor" || pathname === "/customer-profile" || pathname === "/contractor-profile"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <SearchIcon
            color={
              pathname === "/search_contractor" || pathname === "/customer-profile" || pathname === "/contractor-profile"
                ? "#fff"
                : "#292D32"
            }
          />
          Search
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/create_project")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/create_project" || pathname === "/create_project_form"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <DashboardIcon
            color={
              pathname === "/create_project" || pathname === "/create_project_form"
                ? "#fff"
                : "#292D32"
            }
          />
          Create
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/space")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/space" || pathname === "/project-detail"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <ProjectIcon
            color={
              pathname === "/space" || pathname === "/project-detail"
                ? "#fff"
                : "#292D32"
            }
          />
          Space
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/messages")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/messages"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <ChatIcon color={pathname === "/messages" ? "#fff" : "#292D32"} />
          Messages
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/setting", "/setting")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/setting"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <SettingIcon color={pathname === "/setting" ? "#fff" : "#292D32"} />
          Settings
        </Nav.Link>

        <Nav.Link
          onClick={logOutHandler}
          className={
            "d-flex align-items-center gap-3 px-4 py-3 sidebar-link text-dark"
          }
        >
          <LogoutIcon color={"#292D32"} />
          LogOut
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
