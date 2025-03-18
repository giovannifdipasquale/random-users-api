import { useParams } from "react-router";

function UserDetails() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}

export default UserDetails;
