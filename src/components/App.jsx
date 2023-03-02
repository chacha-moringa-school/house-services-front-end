
import { Header } from "./header";
import { Navigation } from "./navigation";
import { Features } from "./features";
import { Contact } from "./contact";
import { Services } from "./services";
import { About } from "./about";
import "../styles/App.css";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  

  return (
    <div>
      <Navigation />
      <Header />
      <Features />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default App;
