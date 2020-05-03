import React, { Fragment } from "react";

import Header from "./components/header.component";

export default function App() {
  return (
    <Fragment>
      <Header title="Home Page">
        <ul>
          <li>homepage</li>
          <li>projects</li>
          <li>photos</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>homepage</li>
          <li>blog</li>
          <li>links</li>
        </ul>
      </Header>
      <Header />
      <Header />
    </Fragment>
  );
}
