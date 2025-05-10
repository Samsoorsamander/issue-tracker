"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";
import { Avatar, Box, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const { data: session } = useSession();

  return (
    <nav className="text-black mb-5 border-b py-3 px-5">
      <Box className="lg:px-20">
        <Flex justify="between">
          <Flex gap="3" align="center">
            <Link href={"/"}>
              <AiFillBug />
            </Link>
            <ul className="flex space-x-5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={classNames({
                      "text-zinc-900": link.href === currentPath,
                      "text-zinc-500": link.href !== currentPath,
                      "hover:text-zinc-800": true,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>

          <Box>
            {session ? (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <span>
                    <Avatar
                      src={session.user?.image || ""}
                      fallback="?"
                      size="3"
                      radius="full"
                      className="cursor-pointer"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size="2">{session.user?.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item
                    onSelect={(e) => {
                      e.preventDefault(); // prevent Radix default behavior
                      signOut();
                    }}
                  >
                    Log out
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </Box>
        </Flex>
      </Box>
    </nav>
  );
};

export default NavBar;
