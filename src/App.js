import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TimeLine from "./components/TimeLine";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <TimeLine />
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
