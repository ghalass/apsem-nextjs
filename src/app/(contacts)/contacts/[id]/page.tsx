import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <h1>Contact Page ID</h1>
      <Link href={"/contacts"} className="btn-link">
        Contacts
      </Link>
    </div>
  );
}
