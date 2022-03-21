import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import Header from "./Header/Header";
import HomePage from "./Pages/HomePage";
import SoundPage from "./Pages/SoundPage";
import PomodoroPage from "./Pages/PomodoroTimer";
import SettingsPage from "./Pages/SettingPage";
import Bottw from "./Bot/Bottw";
import Grapher from "./Grapher/Grapher";
import { polyfill } from "react-lifecycles-compat";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Clock from "./Test/Clock";

function App() {
  return (
    <div className="App">
      <h4></h4>
      <Header />
      {/* <Grapher /> */}
      {/* {items} */}
      {/* {this.state.data} */}
      <h4></h4>
      <Clock />
    
      <Routes>
        <Route path="/" to="/home" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sound" element={<SoundPage />} />
        <Route path="/pomodoro" element={<PomodoroPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
