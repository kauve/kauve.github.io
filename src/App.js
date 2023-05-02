import AboutMe from "./components/organisms/about me/aboutMe";
import Header from "./components/organisms/header/header";
import Skills from "./components/organisms/skills/skills";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
