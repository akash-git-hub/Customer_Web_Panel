import { Navbar, Container, Button } from "react-bootstrap";
import NotificationIcon from "../Icon/NotificationIcon";

const Header = ({ showButton, buttonText = "Click Me", onButtonClick }) => {
  return (
    <Navbar className="border-bottom px-4 py-3">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Left side: either NotificationIcon or Button */}
        {showButton ? (
          <Button variant="warning" onClick={onButtonClick}>
            {buttonText}
          </Button>
        ) : (
          <NotificationIcon />
        )}

        {/* Right side: user info */}
        <div className="d-flex align-items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="rounded-circle border border-warning p-1"
          />
          <div className="text-start">
            <div className="fw-semibold">TRADIE</div>
            <small className="text-warning">Admin</small>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
