import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Alert from "./components/Alert.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import NoteState from "./context/notes/noteState.js";
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
          <div className="container">
            <Routes>
              {/* Use 'Routes' instead of 'Switch' */}
              <Route
                exact
                path="/"
                element={<Home showAlert={showAlert} />}
              />{" "}
              {/* Use 'element' prop */}
              <Route exact path="/About" element={<About />} />
              {/* Use 'element' prop */}
              <Route
                exact
                path="/Login"
                element={<Login showAlert={showAlert}  />}
              />
              <Route
                exact
                path="/Signup"
                element={<Signup showAlert={showAlert}/>}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
