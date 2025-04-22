import Link from "next/link";
import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="flex flex-col center page">
      <h2>Ce contact n'existe pas!</h2>

      <Link href={"/contacts"} className="btn-link">
        Retourner
      </Link>
    </div>
  );
}
