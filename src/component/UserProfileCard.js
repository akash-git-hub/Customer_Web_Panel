import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserProfileCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Card className="border-0 text-center bg-transparent">
      <Card.Body className="d-flex flex-column align-items-center">

        <Image
          src={user.avatar}
          rounded
          width={100}
          height={100}
          className="mb-3 object-fit-cover"
          onClick={() => navigate("/myprofile")}
        />
        <h5 className="fw-bold mb-0">{user.name}</h5>
        <p className="text-muted  mb-0">{user.email}</p>
        <h6 className="text-dark">{user.address}</h6>
      </Card.Body>
    </Card>
  );
};

export default UserProfileCard;
