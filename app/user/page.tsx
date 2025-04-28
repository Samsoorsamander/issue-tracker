import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

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
      <Link href="./user/new" className="btn">
        New user
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
