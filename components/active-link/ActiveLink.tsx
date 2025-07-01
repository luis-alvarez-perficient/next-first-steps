"use client";
import Link from "next/link";
import React, { use } from "react";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  label: string;
}

export const ActiveLink = ({ path, label }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === path;
  return (
    <>
      <Link
        className={`${style.link} ${isActive && style["active-link"]}`}
        href={path}
      >
        {label}
      </Link>
    </>
  );
};
