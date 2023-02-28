import '../styles/App.css';
import NavBar from './NavBar';
import Services from './Services';
import Home from './Home';
import About from './About';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />

    </div>
  );
}

export default App;
