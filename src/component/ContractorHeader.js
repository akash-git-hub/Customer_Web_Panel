import { Navbar, Container, Button, Dropdown } from "react-bootstrap";
import NotificationIcon from "../Icon/NotificationIcon";
import AddPlusIcon from "../Icon/AddPlusIcon";

const ContractorHeader = ({
  buttonText,
  onButtonClick,
  notifications = [],
}) => {
  const showButton = Boolean(buttonText);

  return (
    <Navbar className="border-bottom px-4 py-3">
      <Container fluid className="d-flex justify-content-end align-items-center gap-3">
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="light"
            className="border-0 bg-transparent p-0"
          >
            <NotificationIcon />
          </Dropdown.Toggle>

          <Dropdown.Menu className="notification-dropdown">
            <div className="px-3 py-2 fw-semibold border-bottom">
              Notifications
            </div>

            {notifications.length === 0 ? (
              <div className="px-3 py-3 text-muted small">
                No notifications
              </div>
            ) : (
              notifications.map((item, index) => (
                <Dropdown.Item
                  key={index}
                  className="d-flex gap-2 align-items-start"
                >
                  <img
                    src={item.avatar}
                    alt="user"
                    className="rounded-circle"
                    width={36}
                    height={36}
                  />
                  <div className="text-start">
                    <div className="fw-semibold small">
                      {item.title}
                    </div>
                    <div className="text-muted small">
                      {item.description}
                    </div>
                  </div>
                </Dropdown.Item>
              ))
            )}
          </Dropdown.Menu>
        </Dropdown>

        <div className="d-flex align-items-center gap-3">
          {showButton && (
            <Button className="text-white rounded-5" variant="primary" onClick={onButtonClick}>
              <AddPlusIcon color="#fff" className="mx-1"/>
              {buttonText}
            </Button>
          )}
        </div>

      </Container>
    </Navbar>
  );
};

export default ContractorHeader;
