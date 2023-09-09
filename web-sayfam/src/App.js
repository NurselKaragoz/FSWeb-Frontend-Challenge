import logo from "./logo.svg";
import "./App.css";
import NavigatorBar from "./navbar/nav";
import Header from "./navbar/header";
import Introduce from "./navbar/introduce";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigatorBar />
      <Introduce />
    </div>
  );
}

export default App;
