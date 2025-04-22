"use client";

import { contacts } from "@/app/data/contacts";
import { ContactContext } from "@/context/contact-context";
import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function Provider({ children }: Props) {
  const [contactsList, setContactsList] = useState(contacts);
  return (
    <>
      <ContactContext
        value={{ contacts: contactsList, setContact: setContactsList }}
      >
        {children}
      </ContactContext>
    </>
  );
}
