import React from "react";

interface Props {
  params: { id: number; pid: number };
}

const UserPhoto = ({ params: { id, pid } }: Props) => {
  return (
    <div>
      UserPhoto{id} {pid}
    </div>
  );
};

export default UserPhoto;
