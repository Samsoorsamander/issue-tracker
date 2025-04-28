import React from "react";
import UserTable from "./UserTable";

const UsersPage = async () => {
  // Insted of fetching data in client side we can easly fetch data in server side
  // without any states and effects

  //In next the fetch has its own default catching of data which we can disabel as will
  // revalidate means catch data in every 10 sec

  return (
    <>
      <h1>Users</h1>
      <UserTable />
    </>
  );
};

export default UsersPage;
