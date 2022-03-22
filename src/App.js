import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import Header from "./Header/Header";
import HomePage from "./Pages/HomePage";
import SoundPage from "./Pages/SoundPage";
import PomodoroPage from "./Pages/PomodoroTimer";
import SettingsPage from "./Pages/SettingPage";
import Bottw from "./Bot/Bottw";
import { polyfill } from "react-lifecycles-compat";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Clock from "./Test/Clock";
import Chat from "./Pages/Chat";
import LinksFromChat from "./Chat/LinksFromChat";

function App() {
  return (
    <div className="App">
      <div className={s.logoHeader}>
        <div className={s.headerText}><img className={s.twitchLogo} src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="logo"/>Twitch Sound Alerts</div>
      </div>

      <h4></h4>
      <Header />
      <Bottw />
      {/* <h4></h4> */}
      <Clock />

      <Routes>
        <Route path="/" to="/home" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/sound" element={<SoundPage />} />
        <Route path="/pomodoro" element={<PomodoroPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
