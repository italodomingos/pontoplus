import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import NavBar from "./components/nav/NavBar";
import Container from "./components/layout/Container";
import Home from "./components/home/Home";
import Register from "./components/pages/Register";
import { React, useEffect, useState } from "react";
import ClockIn from "./components/clockin/ClockIn";
import Footer from "./components/footer/Footer";
import Message from "./components/message/Message";

function App() {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Message text={message.text} type={message.type} />
      <Container>
        <Routes>
          <Route path="/" Component={Home} />
          <Route
            path="/login"
            element={<Login setUser={setUser} setMessage={setMessage} />}
          />
          <Route
            path="/register"
            element={<Register setMessage={setMessage} />}
          />
          <Route
            path="/clockin"
            element={<ClockIn setMessage={setMessage} />}
          />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
