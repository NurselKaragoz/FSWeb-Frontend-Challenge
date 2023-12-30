import "./App.css";
import NavigatorBar from "./Companents/nav";
import Header from "./Companents/Header";
import Introduce from "./Companents/introduce";
import Skills from "./Companents/skills";
import Projects from "./Companents/Projects";
import Footer from "./Companents/Footer";
import Profile from "./Companents/Profile";
import { ProjectContext } from "./Context/ProjectContext";

function App() {
  return (
    <div className="App bg-colors-transparent dark:bg-colors-black200">
      <ProjectContext.Provider>
        <Header />
        <NavigatorBar />
        <Introduce />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
