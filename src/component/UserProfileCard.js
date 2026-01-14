import { Card, Image } from "react-bootstrap";

const UserProfileCard = ({ user }) => {
  return (
    <Card className="border-0 text-center bg-transparent">
      <Card.Body className="d-flex flex-column align-items-center">
        <Image
          src={user.avatar}
          roundedCircle
          width={80}
          height={80}
          className="mb-3 object-fit-cover"
        />
        <h5 className="fw-bold mb-0">{user.name}</h5>
        <p className="text-muted  mb-0">{user.email}</p>
        <h6 className="text-dark">{user.address}</h6>
      </Card.Body>
    </Card>
  );
};

export default UserProfileCard;
