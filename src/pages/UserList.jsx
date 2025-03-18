import useUserList from "../hooks/useUserList.js";
function UserList() {
  const { users, loading, error } = useUserList();
  return (
    <>
      <h1>UserList</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {users.map((user) => (
        <div key={user.login.uuid}>
          <p>{user.name.first}</p>
          <p>{user.name.last}</p>
        </div>
      ))}
    </>
  );
}

export default UserList;
