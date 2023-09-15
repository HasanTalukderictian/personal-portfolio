import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Work/Works";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
    </div>
  );
}

export default App;
