import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Notes from "./components/Notes/Notes";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
