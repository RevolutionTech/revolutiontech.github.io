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

interface ProjectListProps {
  everything?: boolean;
}

export const ProjectList = (props: ProjectListProps) => (
  <ProjectListBox>
    {PROJECT_LIST.filter((project) => props.everything || project.visible).map(
      (project) => (
        <ProjectPreviewCard key={project.slug} project={project} />
      )
    )}
  </ProjectListBox>
);
