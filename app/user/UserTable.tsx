import React from "react";

interface Users {
  id: number;
  name: string;
  email: string;
}

const UserTable = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: Users[] = await res.json();

  return (
    <table className="tabel table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
