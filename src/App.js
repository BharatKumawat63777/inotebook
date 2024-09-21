import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Alert from "./components/Alert";
import NoteState from "../src/context/notes/noteState.js";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is a amazing React course" />
          <div className="container">
            <Routes>
              {/* Use 'Routes' instead of 'Switch' */}
              <Route exact path="/" element={<Home />} />{" "}
              {/* Use 'element' prop */}
              <Route exact path="/About" element={<About />} />
              {/* Use 'element' prop */}
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
