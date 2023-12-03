"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const CommonLayout = () => {
  const pathName = usePathname();
  console.log(pathName);
  return pathName !== "/login" ? (
    <ul>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/gita">
        <li>Gita</li>
      </Link>
      <Link href="/about">
        <li>About</li>
      </Link>
      <Link href="/login">
        <li>Login</li>
      </Link>
    </ul>
  ) : null;
};

export default CommonLayout;
