import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link href={"/add-contact"} className="btn-link">
        Contacts
      </Link>
    </div>
  );
}
