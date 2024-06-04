import "./App.css";
import Header from "./header";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";
import EventsPage from "./events";
import ServicePage from "./service";
import SmallGroups from "./smallgroups";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          {/* Setup the Router Switch and Routes here */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/smallgroups" element={<SmallGroups />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
