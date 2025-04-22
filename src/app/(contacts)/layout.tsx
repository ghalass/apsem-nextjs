import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="page">
      <Navbar />
      {children}
    </div>
  );
}
