import React from "react";

export default function Header({ title = "Default", children }) {
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  );
}
