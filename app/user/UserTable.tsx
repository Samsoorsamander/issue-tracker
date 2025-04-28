import React from "react";
import { sort } from "fast-sort";
import Link from "next/link";

interface Users {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: Users[] = await res.json();
  const sortedUsers = sort(users).desc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <table className="tabel table-bordered">
      <thead>
        <tr>
          <th>
            <Link href={"user?sortOrder=name"}>Name</Link>
          </th>
          <th>
            <Link href={"user?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
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
