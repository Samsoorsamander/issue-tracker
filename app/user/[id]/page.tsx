import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const UserDetaile = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserDetaile{id}</div>;
};

export default UserDetaile;
