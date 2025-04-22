import ContactList from "@/components/contact-list";
import Link from "next/link";
import React from "react";

type Props = {};

export default function AddContact({}: Props) {
  return (
    <div className="mt-2">
      <header className="flex between">
        <h1>Liste des contacts</h1>
        <Link href={"/add-contact"} className="btn-link">
          Ajouter un contact
        </Link>
      </header>
      <ContactList />
    </div>
  );
}
