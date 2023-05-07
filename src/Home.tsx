import * as React from "react";

import { ProjectList } from "./project/ProjectList";
import { Intro } from "./Intro";

export const Home = () => (
  <>
    <Intro />
    <ProjectList />
  </>
);
