import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import styled from "styled-components";

import { Footer } from "./nav/Footer";
import { NavHeader } from "./nav/NavHeader";
import { NotFound } from "./nav/NotFound";
import { Home } from "./Home";
import { ProjectDetails } from "./project/ProjectDetails";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const NonFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  margin: 0 16px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 856px;
  margin: 64px auto;
`;

const App = () => (
  <BrowserRouter>
    <AppContainer>
      <NonFooterContainer>
        <NavHeader />
        <ContentContainer>
          <ContentBox>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/everything" element={<Home everything />} />
              <Route path="project/:projectSlug" element={<ProjectDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ContentBox>
        </ContentContainer>
      </NonFooterContainer>
      <Footer />
    </AppContainer>
  </BrowserRouter>
);

export default App;
