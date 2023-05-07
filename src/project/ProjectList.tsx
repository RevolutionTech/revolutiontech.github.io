import * as React from "react";
import styled from "styled-components";

import { PROJECT_LIST } from "./AllProjects";
import { ProjectPreviewCard } from "./ProjectPreviewCard";

const ProjectListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ProjectList = () => (
  <ProjectListBox>
    {PROJECT_LIST.map((project) => (
      <ProjectPreviewCard key={project.slug} project={project} />
    ))}
  </ProjectListBox>
);
