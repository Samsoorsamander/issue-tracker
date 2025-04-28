import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  // Insted of fetching data in client side we can easly fetch data in server side
  // without any states and effects

  //In next the fetch has its own default catching of data which we can disabel as will
  // revalidate means catch data in every 10 sec

  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
