import React from "react";

interface Users {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // Insted of fetching data in client side we can easly fetch data in server side
  // without any states and effects

  //In next the fetch has its own default catching of data which we can disabel as will
  // revalidate means catch data in every 10 sec
  const res = await fetch("http://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: Users[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <table className="tabel table-zebra">
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
    </>
  );
};

export default UsersPage;
