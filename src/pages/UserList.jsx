import useUserData from "../hooks/useUserData.js";
function UserList() {
  const { users, loading, error } = useUserData();
  return (
    <>
      <h1>UserList</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col"> Location </th>
            <th scope="col">Email</th>
            <th scope="col">Cell</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.login.uuid}>
              <th scope="row"> {index} </th>
              <td> {user.name.first} </td>
              <td> {user.name.last} </td>
              <td> {user.location.country} </td>
              <td> {user.email} </td>
              <td> {user.cell} </td>
              <td>
                {" "}
                <Link to={`/users/${user.login.uuid}`}>Detail</Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
