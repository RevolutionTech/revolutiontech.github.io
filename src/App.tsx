import { BrowserRouter, Route, Routes } from "react-router";
import styles from "./App.module.css";
import { Home } from "./Home";
import { Footer } from "./nav/Footer";
import { NavHeader } from "./nav/NavHeader";
import { NotFound } from "./nav/NotFound";
import { ProjectDetails } from "./project/ProjectDetails";

const App = () => (
  <BrowserRouter>
    <div className={styles.app}>
      <div className={styles.nonFooter}>
        <NavHeader />
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/everything" element={<Home everything />} />
              <Route path="project/:projectSlug" element={<ProjectDetails />} />
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
