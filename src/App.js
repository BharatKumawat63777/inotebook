import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Alert from "./components/Alert";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Sport from "./components/Sports.js";
import NoteState from "../src/context/notes/noteState.js";

import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <Routes>
            {/* Use 'Routes' instead of 'Switch' */}
            <Route
              exact
              path="/"
              element={<Home showAlert={showAlert} />}
            />{" "}
            <Route
              exact
              path="/Login"
              element={<Login showAlert={showAlert} />}
            />
            <Route
              exact
              path="/Signup"
              element={<Signup showAlert={showAlert} />}
            />
            {/* Use 'element' prop */}
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Sport" element={<Sport />} />
            {/* Use 'element' prop */}
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
