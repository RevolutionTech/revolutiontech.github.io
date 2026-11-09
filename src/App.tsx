import { BrowserRouter, Route, Routes } from "react-router";
import styles from "./App.module.css";
import { Home } from "./Home";
import { Footer } from "./nav/Footer";
import { NavHeader } from "./nav/NavHeader";
import { NotFound } from "./nav/NotFound";
import { ProjectDetails } from "./project/ProjectDetails";
import type { SiteContent } from "./SiteContent";

interface AppProps {
  content: SiteContent;
}

const App = ({ content }: AppProps) => (
  <BrowserRouter>
    <div className={styles.app}>
      <div className={styles.nonFooter}>
        <NavHeader />
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home intro={content.intro} projects={content.projects} />
                }
              />
              <Route
                path="/everything"
                element={
                  <Home
                    intro={content.everythingIntro}
                    projects={content.projects}
                    everything
                  />
                }
              />
              <Route
                path="project/:projectSlug"
                element={<ProjectDetails projects={content.projects} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
