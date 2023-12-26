import "./App.css";
import NavigatorBar from "./Companents/nav";
import Header from "./Companents/header";
import Introduce from "./Companents/introduce";
import Skills from "./Companents/skills";
import Projects from "./Companents/Projects";
import Footer from "./Companents/Footer";
import Profile from "./Companents/Profile";

function App() {
  return (
    <div className="App bg-colors-transparent dark:bg-colors-black200">
      <Header />
      <NavigatorBar />
      <Introduce />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
