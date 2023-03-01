
import { Header } from "./header";
import { Navigation } from "./navigation";
import { Features } from "./features";
import { Contact } from "./contact";
import "../styles/App.css";

const App = () => {
  

  return (
    <div>
      <Navigation />
      <Header />
      <Features />
      <Contact />
    </div>
  );
};

export default App;
