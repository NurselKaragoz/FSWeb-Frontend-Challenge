import "./App.css";
import NavigatorBar from "./Companents/nav";
import Header from "./Companents/header";
import Introduce from "./Companents/introduce";
import Skills from "./Companents/skills";
import Profile from "./Companents/profile";
import Projects from "./Companents/Projects";
import Footer from "./Companents/Footer";
import Dark from "./Companents/darkmode";

function App() {
  return (
    <div className="App">
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
