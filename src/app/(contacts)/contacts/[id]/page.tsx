import UserDetails from "@/components/user-details";
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="mt-2">
      <UserDetails />
    </div>
  );
}
