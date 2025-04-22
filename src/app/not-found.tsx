import Link from "next/link";
import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="flex flex-col center page">
      <h1>La page que vous demander n'existe pas!</h1>

      <Link href={"/contacts"} className="btn-link">
        Retourner
      </Link>
    </div>
  );
}
