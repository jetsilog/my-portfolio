import NavBar from './components/NavBar';
import Home from './components/Home';
import TimeLine from './components/TimeLine';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FacebookMsg from './components/FacebookMsg';
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <TimeLine />

      <ToastContainer />
      <FacebookMsg />
    </div>
  );
}

export default App;
