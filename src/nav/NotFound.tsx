import * as React from "react";
import { Link } from "react-router-dom";

import { Header } from "../molecules/Header";

export const NotFound = () => (
  <>
    <Header>404 Not Found!</Header>
    <p>
      This page no longer exists. You may be able to find what you&apos;re
      looking for from the <Link to="/">Home page</Link>.
    </p>
  </>
);
