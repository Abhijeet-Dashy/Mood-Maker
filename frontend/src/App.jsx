import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mood from "./pages/Mood";
import Landing from "./pages/Landing";
import Singup from "./pages/Singup";
import About from "./pages/About";
import Load from "./components/Load";

const App = () => {
  // const handleLogin = (email, password) => {
  //   if (email == 'alpanahota@gmail.com' && password == '7362991025') {
  //     setUser('kittie')
  //   } else if (userData) {
  //     const employee = userData.find((e) => email == e.email && e.password == password)
  //     if (employee) {
  //       setUser('user')
  //       setLoggedInUserData(employee)
  //     }
  //   }
  //   else {
  //     alert("Invalid Credentials")
  //   }
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Landing />}/> */}
        <Route path="/mood" element={<Mood />} />
        {/* <Route path="/signup" element={<Singup />}/> */}
        <Route path="/about" element={<About />} />
        <Route path="/loading" element={<Load/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
