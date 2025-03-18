import { useState, useEffect } from "react";

function useUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        let response = await fetch("https://randomuser.me/api/?results=10");
        let data = await response.json();
        setUsers(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return { users, loading, error };
}

export default useUserList;