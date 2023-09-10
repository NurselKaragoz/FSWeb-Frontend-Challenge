import logo from "./logo.svg";
import "./App.css";
import NavigatorBar from "./navbar/nav";
import Header from "./navbar/header";
import Introduce from "./navbar/introduce";
import Skills from "./navbar/skills";
import Profile from "./navbar/profile";
import Projects from "./navbar/Projects";
import Footer from "./navbar/Footer";

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
