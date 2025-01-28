import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import BookingPage from "./screens/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/booking" element={<BookingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
