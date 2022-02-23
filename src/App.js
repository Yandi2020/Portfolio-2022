import MyNavbar from "./components/navbar/MyNavbar";
import MyIntro from "./components/intro/MyIntro";
import Profile from "./components/profile/Profile";
import Skills from "./components/skill/Skills";
import Project from "./components/project/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyIntro />
      <Profile />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
