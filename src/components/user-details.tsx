"use client";

import { ContactContext } from "@/context/contact-context";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React, { use } from "react";

type Props = {};

export default function UserDetails({}: Props) {
  const { contacts } = use(ContactContext);
  const { id } = useParams();
  const currentContact = contacts.find((c) => c.id === Number(id));

  if (!currentContact) {
    return notFound();
  }
  return (
    <div className="flex mt-2 center flex-col">
      <Image
        src={currentContact.avatar}
        alt={currentContact.nom}
        width={200}
        height={200}
        style={{
          background: "#3334",
          borderRadius: "50%",
        }}
      />
      <h2>{currentContact.nom}</h2>
      <p>
        <strong>Email : </strong>
        {currentContact.email}
      </p>
      <p>
        <strong>Numéro Telephone : </strong>
        {currentContact.numTel}
      </p>
      <Link href={"/contacts"} className="btn">
        Retourner
      </Link>
    </div>
  );
}
