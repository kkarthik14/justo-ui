import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Time from "./pages/Time";
import OneTimeLink from "./pages/OneTimeLink";
import KickoutUser from "./pages/KickoutUser";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/register">Register</Link> |
            <Link to="/login">Login</Link> |
            <Link to="/time">Get Time</Link> |
            <Link to="/one-time-link">One-Time Link</Link> |
            <Link to="/kickout-user">Kickout User</Link>


          </nav>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/time" element={<Time />} />
            <Route path="/one-time-link" element={<OneTimeLink />} />
            <Route path="/kickout-user" element={<KickoutUser />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;


