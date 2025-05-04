import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex text-black">
      <Link href={"/"}>Logo</Link>
      <ul>
        <li>
          <Link href={"/"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/issue"}>Issue</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
