"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const link = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
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
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
