import { contacts } from "@/app/data/contacts";
import Image from "next/image";
import React from "react";
import ContactCard from "./contact-card";

type Props = {};

export default function ContactList({}: Props) {
  return (
    <div className="w-full">
      {contacts.map((contact) => (
        <ContactCard contact={contact} key={contact.id} />
      ))}
    </div>
  );
}
