import "./App.css";
import NavigatorBar from "./Companents/Nav";
import Header from "./Companents/Header";
import Introduce from "./Companents/introduce";
import Skills from "./Companents/Skills";
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
