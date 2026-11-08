import * as React from "react";
import { Intro } from "./Intro";
import { ProjectList } from "./project/ProjectList";

interface HomeProps {
  everything?: boolean;
}

export const Home = (props: HomeProps) => (
  <>
    <Intro everything={props.everything} />
    <ProjectList everything={props.everything} />
  </>
);
