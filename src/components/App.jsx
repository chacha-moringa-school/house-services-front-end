import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./header";
import { Navigation } from "./navigation";
import { Features } from "./features";
import { Contact } from "./contact";
import { Services } from "./services";
import { About } from "./about";
import ServicePage from "./services_page/Hero";
import "../styles/App.css";
import SmoothScroll from "smooth-scroll";
import Create from "./create";
import Update from "./update";
import Service from "./admin/Service";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navigation />,
                <Header />,
                <Features />,
                <Services />,
                <About />,
                <Contact />
              </>
            }
          />
          <Route
            exact
            path="/services"
            element={
              <>
                <Navigation />,
                <ServicePage />,
                <Contact />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
                <Login />
            }
          />
          <Route
            exact
            path="/admin"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route
            exact
            path="/admin/dashboard/:id"
            element={
              <>
                <Service />
              </>
            }
          />
          <Route
            exact
            path="/create"
            element={
                <Create />
              }
          />
          <Route
            exact
            path="/update/:servid"
            element={
                <Update />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
