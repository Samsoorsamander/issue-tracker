import React from "react";

interface Props {
  params: { id: number };
}

const UserDetaile = ({ params: { id } }: Props) => {
  return <div>UserDetaile{id}</div>;
};

export default UserDetaile;
