"use client";

import React, { use } from "react";
import ContactCard from "./contact-card";
import { ContactContext } from "@/context/contact-context";

type Props = {};

export default function ContactList({}: Props) {
  const { contacts } = use(ContactContext);
  return (
    <div className="w-full">
      {contacts.map((contact) => (
        <ContactCard contact={contact} key={contact.id} />
      ))}
    </div>
  );
}
