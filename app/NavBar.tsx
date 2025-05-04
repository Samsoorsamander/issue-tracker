import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const link = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issue" },
  ];
  return (
    <nav className="flex text-black mb-5 space-x-5 border-b h-14 px-5 items-center">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className="flex space-x-5">
        {link.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
