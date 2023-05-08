import * as React from "react";

import { ProjectList } from "./project/ProjectList";
import { Intro } from "./Intro";

interface HomeProps {
  everything?: boolean;
}

export const Home = (props: HomeProps) => (
  <>
    <Intro everything={props.everything} />
    <ProjectList everything={props.everything} />
  </>
);
