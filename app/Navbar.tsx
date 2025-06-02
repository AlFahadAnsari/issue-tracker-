"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <div>
      <nav className="flex justify-between items-center p-4 border-b border-zinc-300">
        <Link href="/" className="flex items-center gap-2 text-2xl">
          <AiFillBug />
          <h1>Issue Tracker</h1>
        </Link>
        <ul className="flex gap-4 text-lg ">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-zinc-500 transition-colors ${
                  pathname === link.href ? "text-zinc-500" : " text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
