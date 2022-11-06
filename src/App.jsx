import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainpage/MainPage";
import ProfilePage from "./components/profilepage/ProfilePage";
import CVPage from "./components/cvpage/CVPage";
import ContactPage from "./components/contactpage/ContactPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
